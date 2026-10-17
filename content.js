/*
✨ CoonDev • https://dev.coonlink.com/

 ▄█▄    ████▄ ████▄    ▄   ██▄   ▄███▄      ▄
 █▀ ▀▄  █   █ █   █     █  █  █  █▀   ▀      █
 █   ▀  █   █ █   █ ██   █ █   █ ██▄▄   █     █
 █▄  ▄▀ ▀████ ▀████ █ █  █ █  █  █▄   ▄▀ █    █
 ▀███▀              █  █ █ ███▀  ▀███▀    █  █
                    █   ██                 █▐
                                           ▐
*/

const BASE = { p: 50000, t: 250000 }

const COUNTRIES = [
  { menu: "日本", locales: ["ja_JP"], buy: true, pPlace: 1, pUsd: 43141, pPct: -13.7 },
  { menu: "台灣", locales: ["zh_TW"], buy: true, pPlace: 2, pUsd: 46662, pPct: -6.7, tPlace: 1, tUsd: 233311, tPct: -6.7 },
  { menu: "Canada", locales: ["en_CA", "fr_CA"], buy: true, pPlace: 3, pUsd: 49325, pPct: -1.3, tPlace: 2, tUsd: 246627, tPct: -1.3 },
  { menu: "Hong Kong", locales: ["en_HK", "zh_HK"], buy: true, pPlace: 4, pUsd: 49698, pPct: -0.6, tPlace: 4, tUsd: 248489, tPct: -0.6 },
  { menu: "Macau", locales: ["en_MO", "zh_MO"], buy: true, pPlace: 4, pUsd: 49698, pPct: -0.6, tPlace: 4, tUsd: 248489, tPct: -0.6 },
  { menu: "Malaysia", locales: ["en_MY"], buy: true, pPlace: 6, pUsd: 49725, pPct: -0.6, tPlace: 3, tUsd: 247153, tPct: -1.1 },
  { menu: "United States", locales: ["en_US"], buy: true, pPlace: 7, pUsd: 50000, pPct: 0, tPlace: 6, tUsd: 250000, tPct: 0 },
  { menu: "Puerto Rico", locales: ["en_PR", "es_PR"], buy: true, pPlace: 7, pUsd: 50000, pPct: 0, tPlace: 6, tUsd: 250000, tPct: 0 },
  { menu: "România", locales: ["ro_RO"], buy: true, pPlace: 9, pUsd: 52035, pPct: 4.1, tPlace: 9, tUsd: 260166, tPct: 4.1 },
  { menu: "México", locales: ["es_MX"], buy: true, pPlace: 10, pUsd: 52229, pPct: 4.5, tPlace: 8, tUsd: 260061, tPct: 4.0 },
  { menu: "대한민국", locales: ["ko_KR"], buy: true, pPlace: 11, pUsd: 52579, pPct: 5.2, tPlace: 14, tUsd: 264831, tPct: 5.9 },
  { menu: "India", locales: ["en_IN"], buy: true, pPlace: 12, pUsd: 52639, pPct: 5.3, tPlace: 11, tUsd: 263144, tPct: 5.3 },
  { menu: "ประเทศไทย", locales: ["th_TH"], buy: true, pPlace: 13, pUsd: 52974, pPct: 5.9, tPlace: 13, tUsd: 264660, tPct: 5.9 },
  { menu: "Česká republika", locales: ["cs_CZ"], buy: true, pPlace: 14, pUsd: 53880, pPct: 7.8, tPlace: 20, tUsd: 277227, tPct: 10.9 },
  { menu: "Magyarország", locales: ["hu_HU"], buy: true, pPlace: 15, pUsd: 54097, pPct: 8.2, tPlace: 15, tUsd: 270484, tPct: 8.2 },
  { menu: "Polska", locales: ["pl_PL"], buy: true, pPlace: 16, pUsd: 54403, pPct: 8.8, tPlace: 10, tUsd: 262265, tPct: 4.9 },
  { menu: "Singapore", locales: ["en_SG"], buy: true, pPlace: 17, pUsd: 54588, pPct: 9.2, tPlace: 16, tUsd: 270599, tPct: 8.2 },
  { menu: "Sverige", locales: ["sv_SE"], buy: true, pPlace: 18, pUsd: 54719, pPct: 9.4, tPlace: 19, tUsd: 276609, tPct: 10.6 },
  { menu: "Danmark", locales: ["da_DK"], buy: true, pPlace: 19, pUsd: 55481, pPct: 11.0, tPlace: 18, tUsd: 275155, tPct: 10.1 },
  { menu: "Philippines", locales: ["en_PH"], buy: true, pPlace: 19, pUsd: 55481, pPct: 11.0, tPlace: 21, tUsd: 277407, tPct: 11.0 },
  { menu: "Saudi Arabia", locales: ["en_SA", "ar_SA"], buy: true, pPlace: 21, pUsd: 56000, pPct: 12.0, tPlace: 17, tUsd: 272000, tPct: 8.8 },
  { menu: "Belgium", locales: ["nl_BE", "fr_BE"], buy: true, pPlace: 22, pUsd: 56076, pPct: 12.2, tPlace: 24, tUsd: 280379, tPct: 12.2 },
  { menu: "Deutschland", locales: ["de_DE"], buy: true, pPlace: 22, pUsd: 56076, pPct: 12.2, tPlace: 24, tUsd: 280379, tPct: 12.2 },
  { menu: "Eesti", locales: ["et_EE"], buy: true, pPlace: 22, pUsd: 56076, pPct: 12.2, tPlace: 24, tUsd: 280379, tPct: 12.2 },
  { menu: "Ελλάδα", locales: ["el_GR"], buy: true, pPlace: 22, pUsd: 56076, pPct: 12.2, tPlace: 24, tUsd: 280379, tPct: 12.2 },
  { menu: "España", locales: ["es_ES"], buy: true, pPlace: 22, pUsd: 56076, pPct: 12.2, tPlace: 24, tUsd: 280379, tPct: 12.2 },
  { menu: "France", locales: ["fr_FR"], buy: true, pPlace: 22, pUsd: 56076, pPct: 12.2, tPlace: 24, tUsd: 280379, tPct: 12.2 },
  { menu: "Hrvatska", locales: ["hr_HR"], buy: true, pPlace: 22, pUsd: 56076, pPct: 12.2, tPlace: 24, tUsd: 280379, tPct: 12.2 },
  { menu: "Ireland", locales: ["en_IE"], buy: true, pPlace: 22, pUsd: 56076, pPct: 12.2, tPlace: 24, tUsd: 280379, tPct: 12.2 },
  { menu: "Italia", locales: ["it_IT"], buy: true, pPlace: 22, pUsd: 56076, pPct: 12.2, tPlace: 24, tUsd: 280379, tPct: 12.2 },
  { menu: "Latvija", locales: ["lv_LV"], buy: true, pPlace: 22, pUsd: 56076, pPct: 12.2, tPlace: 24, tUsd: 280379, tPct: 12.2 },
  { menu: "Lietuva", locales: ["lt_LT"], buy: true, pPlace: 22, pUsd: 56076, pPct: 12.2, tPlace: 24, tUsd: 280379, tPct: 12.2 },
  { menu: "Luxembourg", locales: ["fr_LU", "de_LU"], buy: true, pPlace: 22, pUsd: 56076, pPct: 12.2, tPlace: 24, tUsd: 280379, tPct: 12.2 },
  { menu: "Nederland", locales: ["nl_NL"], buy: true, pPlace: 22, pUsd: 56076, pPct: 12.2, tPlace: 24, tUsd: 280379, tPct: 12.2 },
  { menu: "Österreich", locales: ["de_AT"], buy: true, pPlace: 22, pUsd: 56076, pPct: 12.2, tPlace: 24, tUsd: 280379, tPct: 12.2 },
  { menu: "Portugal", locales: ["pt_PT"], buy: true, pPlace: 22, pUsd: 56076, pPct: 12.2, tPlace: 24, tUsd: 280379, tPct: 12.2 },
  { menu: "Slovensko", locales: ["sk_SK"], buy: true, pPlace: 22, pUsd: 56076, pPct: 12.2, tPlace: 24, tUsd: 280379, tPct: 12.2 },
  { menu: "Slovenija", locales: ["sl_SI"], buy: true, pPlace: 22, pUsd: 56076, pPct: 12.2, tPlace: 24, tUsd: 280379, tPct: 12.2 },
  { menu: "Switzerland", locales: ["fr_CH", "de_CH", "it_CH"], buy: true, pPlace: 45, pUsd: 60366, pPct: 20.7, tPlace: 44, tUsd: 301828, tPct: 20.7 },
  { menu: "Suomi", locales: ["fi_FI"], buy: true, pPlace: 22, pUsd: 56076, pPct: 12.2, tPlace: 24, tUsd: 280379, tPct: 12.2 },
  { menu: "United Kingdom", locales: ["en_GB"], buy: true, pPlace: 46, pUsd: 66308, pPct: 32.6, tPlace: 45, tUsd: 331542, tPct: 32.6 },
  { menu: "ישראל", locales: ["he_IL"], buy: true, pPlace: 40, pUsd: 56767, pPct: 13.5, tPlace: 12, tUsd: 263192, tPct: 5.3 },
  { menu: "UAE", locales: ["en_AE", "ar_AE"], buy: true, pPlace: 41, pUsd: 57182, pPct: 14.4, tPlace: 22, tUsd: 277740, tPct: 11.1 },
  { menu: "Qatar", locales: ["en_QA", "ar_QA"], buy: true, pPlace: 42, pUsd: 57692, pPct: 15.4, tPlace: 23, tUsd: 280220, tPct: 12.1 },
  { menu: "Norge", locales: ["no_NO"], buy: true, pPlace: 43, pUsd: 58000, pPct: 16.0, tPlace: 42, tUsd: 290526, tPct: 16.2 },
  { menu: "Ísland", locales: ["is_IS"], buy: true, pPlace: 44, pUsd: 59214, pPct: 18.4, tPlace: 43, tUsd: 296894, tPct: 18.8 },
  { menu: "中国大陆", locales: ["zh_CN"], buy: true, special: "deposit" },
  { menu: "Australia", locales: ["en_AU"], buy: false },
  { menu: "New Zealand", locales: ["en_NZ"], buy: false }
]

const byMenu = new Map(COUNTRIES.map((country) => [country.menu, country]))
const byLocale = new Map(COUNTRIES.flatMap((country) => country.locales.map((locale) => [locale, country])))
function money(amount) {return "$" + Math.round(amount).toLocaleString("en-US")}

function percent(value) {
  if (value === 0) return "0%"
  const sign = value > 0 ? "+" : "−"
  return sign + Math.abs(value).toFixed(1) + "%"
}

function badgeClass(country) {
  if (!country.buy) return "rl-off"
  if (country.special) return "rl-other"
  if (country.pPct < 0) return "rl-cheap"
  if (country.pPct > 0) return "rl-dear"
  return "rl-base"
}

function badgeText(country) {
  if (!country.buy) return "No"
  if (country.special === "deposit") return "Deposit"
  return percent(country.pPct)
}

function currentCountry() {
  const match = location.pathname.match(/^\/([a-z]{2}_[A-Z]{2})\//)
  if (!match) return byLocale.get("en_US")
  return byLocale.get(match[1]) || null
}

function markMenus() {
  for (const heading of document.querySelectorAll("h3")) {
    const country = byMenu.get(heading.textContent.trim())
    if (!country || heading.querySelector(".rl-badge")) continue
    const badge = document.createElement("span")
    badge.className = "rl-badge " + badgeClass(country)
    badge.textContent = badgeText(country)
    heading.appendChild(badge)
  }
}

function amountText(country, kind) {
  const usd = kind === "p" ? country.pUsd : country.tUsd
  const pct = kind === "p" ? country.pPct : country.tPct
  if (usd == null) return "No"
  return money(usd) + " " + percent(pct)
}

function line(country, kind) {
  const place = kind === "p" ? country.pPlace : country.tPlace
  if (place == null) return country.menu + " — No this version"
  return place + ". " + country.menu + " " + amountText(country, kind)
}

let panelCollapsed = true

function rememberPanel() {chrome.storage?.local.set({ rlCollapsed: panelCollapsed })}

chrome.storage?.local.get("rlCollapsed", (data) => {
  if (data.rlCollapsed === false) panelCollapsed = false
  applyPanelMode()
})

function localeMenuOpen() {
  const card = document.querySelector(".tds-locale-selector-country")
  if (!card) return false
  const style = getComputedStyle(card)
  if (style.display === "none" || style.visibility === "hidden" || Number(style.opacity) === 0) return false
  const rect = card.getBoundingClientRect()
  return rect.width > 2 && rect.height > 2 && rect.bottom > 0 && rect.right > 0 && rect.top < window.innerHeight && rect.left < window.innerWidth
}

function applyPanelMode() {
  const panel = document.querySelector(".rl-panel")
  if (!panel) return
  const menuOpen = localeMenuOpen()
  panel.classList.toggle("rl-hidden", menuOpen)
  panel.classList.toggle("rl-collapsed", panelCollapsed)
}

function renderPanel() {
  if (document.querySelector(".rl-panel")) {
    applyPanelMode()
    return
  }
  const here = currentCountry()
  const topP = COUNTRIES.filter((country) => country.pPlace && country.pPlace <= 3).sort((a, b) => a.pPlace - b.pPlace)
  const topT = COUNTRIES.filter((country) => country.tPlace && country.tPlace <= 3).sort((a, b) => a.tPlace - b.tPlace)
  const panel = document.createElement("aside")
  panel.className = "rl-panel"
  const hereText = !here? "This country is not in the calculation.": !here.buy? here.menu + ": cannot buy.": here.special? here.menu + ": alternate scheme, deposit only.": here.menu + ". Performance " + amountText(here, "p") + ". Thrust " + amountText(here, "t") + "."
  panel.innerHTML = [
    "<div class=\"rl-head\">",
    "<div class=\"rl-title\">Roadster Ledger</div>",
    "<button class=\"rl-close\" type=\"button\" aria-label=\"Close\">×</button>",
    "</div>",
    "<div class=\"rl-body\">",
    "<div class=\"rl-note\">US page, Performance: Due Today $5,000 + $45,000 in 10 days = " + money(BASE.p) + ". Thrust: $5,000 + $245,000 = " + money(BASE.t) + ". Minus means both payments are cheaper.</div>",
    "<div class=\"rl-label\">Performance</div>",
    topP.map((country) => "<div class=\"rl-row\">" + line(country, "p") + "</div>").join(""),
    "<div class=\"rl-label\">Thrust</div>",
    topT.map((country) => "<div class=\"rl-row\">" + line(country, "t") + "</div>").join(""),
    "<div class=\"rl-here\">" + hereText + "</div>",
    "<div class=\"rl-rate\">Rates as of October 16, 2026. Performance is marked in the menu.</div>",
    "</div>"
  ].join("")
  panel.querySelector(".rl-close").addEventListener("click", (event) => {
    event.stopPropagation()
    panelCollapsed = true
    rememberPanel()
    applyPanelMode()
  })
  panel.classList.add("rl-collapsed")
  document.body.appendChild(panel)
  requestAnimationFrame(() => requestAnimationFrame(() => applyPanelMode()))
}

const LOGO = '<svg viewBox="0 0 320 320" aria-hidden="true"><path d="m160 318 44.4-249.7c42.3 0 55.7 4.7 57.6 23.6 0 0 28.4-10.6 42.7-32.1-55.9-25.9-112-27.1-112-27.1l-32.8 39.9h.1l-32.8-39.9s-56.1 1.2-112 27.1c14.3 21.5 42.7 32.1 42.7 32.1 2-18.9 15.3-23.6 57.3-23.6z"/><path d="M160 21.2c45.2-.4 96.8 7 149.8 30.1 7.1-12.7 8.9-18.4 8.9-18.4C268.2 12.8 214.4 2.3 160 2 105.6 2.3 51.8 12.8 1.3 32.9c2.6 6.3 5.5 12.4 8.9 18.4C63.1 28.2 114.8 20.9 160 21.2"/></svg>'

function mountLauncher() {
  const pay = document.querySelector("button.btn-creditcard")
  if (!pay || pay.parentElement?.querySelector(":scope > .rl-launch")) return
  const host = document.createElement("div")
  host.className = "rl-pay-row"
  pay.replaceWith(host)
  host.appendChild(pay)
  const button = document.createElement("button")
  button.type = "button"
  button.className = "tds-btn tds-btn--secondary rl-launch"
  button.setAttribute("aria-label", "Roadster Ledger")
  button.innerHTML = LOGO
  button.addEventListener("click", (event) => {
    event.preventDefault()
    event.stopPropagation()
    button.classList.remove("tds--focus")
    button.blur()
    panelCollapsed = !panelCollapsed
    rememberPanel()
    applyPanelMode()
  })
  host.appendChild(button)
}

function paint() {
  markMenus()
  renderPanel()
  mountLauncher()
}

paint()
new MutationObserver(paint).observe(document.documentElement, { childList: true, subtree: true })
