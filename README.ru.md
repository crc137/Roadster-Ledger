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
  <p>Показывает, в какой стране бронь Tesla Roadster дешевле, чем в США.</p>
</div>

## Что делает

Расширение работает на [странице брони Roadster](https://www.tesla.com/roadster/reserve).

- В списке стран видно сравнение с американской Performance. Минус значит дешевле, плюс значит дороже, 0% — это США.
- `No` значит, что там нельзя забронировать. `Deposit` — материковый Китай.
- Круглая кнопка справа от Pay with Card открывает короткий список самых дешёвых Performance и Thrust.
- Закрытие карточки запоминается при смене страны. Пока открыт список стран, карточка скрыта.
- Данные карты не читаются, заказ не оформляется.

## Как считается процент

База США для Performance: $5,000 сегодня плюс $45,000 в течение 10 дней, вместе $50,000. Thrust: $5,000 плюс $245,000, вместе $250,000. Складываются оба платежа, затем сумма переводится в доллары США. Курсы на 16 октября 2026.

Знак `$` на сайте не всегда означает доллар США. У Канады это CAD, у Мексики MXN, у Сингапура SGD. В Макао сумма в MOP — тот же платёж, что и в HKD, а не вторая оплата.

## Установка

1. Откройте `chrome://extensions`.
2. Включите режим разработчика.
3. Нажмите «Загрузить распакованное» и выберите эту папку.

## Разрешения

`storage` запоминает только то, что карточка закрыта. Скрипт запускается только на страницах брони Roadster.
