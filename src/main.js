import './style.css'

const CENTER = {
  phoneText: '+7 (960) 648-36-22',
  phoneTel: '+79606483622',
  emailText: 'diamed57@mail.ru',
  emailMailto: 'mailto:diamed57@mail.ru',
  addressText: 'Кромы, ул. 25 Октября, д. 52 А',
  addressHeaderLine1: '303200, Орловская обл., Кромы',
  addressHeaderLine2: 'ул. 25 Октября, д. 52 А',
  addressHeaderWideLine1: '303200, Орловская обл.',
  addressHeaderWideLine2: 'Кромы, ул. 25 Октября, д. 52 А',
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
  bindText('addressHeaderLine1', CENTER.addressHeaderLine1)
  bindText('addressHeaderLine2', CENTER.addressHeaderLine2)
  bindText('addressHeaderWideLine1', CENTER.addressHeaderWideLine1)
  bindText('addressHeaderWideLine2', CENTER.addressHeaderWideLine2)

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

setupBinds()
setupSmoothScroll()
