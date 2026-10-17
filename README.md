<div align="center">
  <a href="https://github.com/coonlink">
    <img width="90px" src="icons/logo.png" alt="Logo" />
  </a>
  <h1>Roadster Ledger</h1>

  [![English](https://img.shields.io/badge/lang-English%20🇺🇸-white)](README.md)
  [![Русский](https://img.shields.io/badge/язык-Русский%20🇷🇺-white)](README.ru.md)

  <img alt="last-commit" src="https://img.shields.io/github/last-commit/crc137/Roadster-Ledger?style=flat&amp;logo=git&amp;logoColor=white&amp;color=0080ff" style="margin: 0px 2px;">
  <img alt="repo-top-language" src="https://img.shields.io/github/languages/top/crc137/Roadster-Ledger?style=flat&amp;color=0080ff" style="margin: 0px 2px;">
  <img alt="repo-language-count" src="https://img.shields.io/github/languages/count/crc137/Roadster-Ledger?style=flat&amp;color=0080ff" style="margin: 0px 2px;">
  <img alt="version" src="https://img.shields.io/badge/version-26.1.0-blue" style="margin: 0px 2px;">
  <!-- img alt="status" src="https://img.shields.io/badge/status-STABLE-green" style="margin: 0px 2px;" -->
</div>

<br />

<div align="center">
  <p>Shows in which country a Tesla Roadster reservation is cheaper than the United States.</p>
</div>

## What it does

The extension runs on the [Roadster reserve page](https://www.tesla.com/roadster/reserve).

- The country list shows how that country compares with the US Performance total. A minus is cheaper, a plus costs more, and 0% is the United States.
- `No` means the car cannot be reserved there. `Deposit` is mainland China.
- The round button next to Pay with Card opens a short list of the cheapest Performance and Thrust reservations.
- Closing that card is remembered when you change country. The card hides while the country list is open.
- It does not read payment details and does not place an order.

## How the percent is counted

The US Performance baseline is Due Today $5,000 plus $45,000 within 10 days, which is $50,000. Thrust is $5,000 plus $245,000, which is $250,000. Both payments are added, then converted to US dollars. Rates are from 16 October 2026.

A `$` on the page is not always US dollars. Canada is CAD, Mexico is MXN, and Singapore is SGD. In Macau, the MOP amount is the same payment as the HKD amount, not a second charge.

## Install

1. Open `chrome://extensions`.
2. Turn on Developer mode.
3. Choose Load unpacked and select this folder.

## Permissions

`storage` remembers only that the card is closed. The script runs only on Tesla Roadster reserve pages.

