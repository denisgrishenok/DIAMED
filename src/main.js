import './style.css'

const CENTER = {
  phoneText: '+7 (960) 648-36-22',
  phoneTel: '+79606483622',
  emailText: 'diamed57@mail.ru',
  emailMailto: 'mailto:diamed57@mail.ru',
  addressText: 'пгт Кромы, ул. 25 Октября, д. 52, литер А',
  mapUrl: 'https://yandex.com/maps/-/CPft64n1',
}

function qs(selector, root = document) {
  return root.querySelector(selector)
}

function qsa(selector, root = document) {
  return Array.from(root.querySelectorAll(selector))
}

function bindText(key, value) {
  qsa(`[data-bind="${key}"]`).forEach((el) => {
    el.textContent = value
  })
}

function bindLink(key, href) {
  qsa(`[data-bind="${key}"]`).forEach((el) => {
    if (el instanceof HTMLAnchorElement) el.href = href
  })
}

function setupBinds() {
  bindText('phoneText', CENTER.phoneText)
  bindText('phoneText3', CENTER.phoneText)
  bindText('addressText', CENTER.addressText)
  bindText('addressText2', CENTER.addressText)

  bindLink('phoneLink', `tel:${CENTER.phoneTel}`)
  bindLink('phoneLink3', `tel:${CENTER.phoneTel}`)
  bindLink('mapLink', CENTER.mapUrl)

  bindText('emailText', CENTER.emailText)
  bindLink('emailLink', CENTER.emailMailto)

  bindText('year', String(new Date().getFullYear()))
}

function setupSmoothScroll() {
  qsa('a[data-scroll]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href') || ''
      if (!href.startsWith('#')) return
      const target = qs(href)
      if (!target) return
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  })
}

function setupMobileMenu() {
  const toggleBtn = qs('[data-menu-toggle]')
  const menu = qs('[data-mobile-menu]')
  if (!toggleBtn || !menu) return

  const setOpen = (open) => {
    menu.hidden = !open
    toggleBtn.setAttribute('aria-expanded', String(open))
    document.body.classList.toggle('isMenuOpen', open)
  }

  toggleBtn.addEventListener('click', () => {
    setOpen(menu.hidden)
  })

  qsa('a[href^="#"]', menu).forEach((el) => {
    el.addEventListener('click', () => setOpen(false))
  })

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false)
  })
}

setupBinds()
setupSmoothScroll()
setupMobileMenu()
