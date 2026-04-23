# Simple Xray Core

Современный проект для быстрого запуска и базового управления **Xray Core без графической панели**.

## Что нового в репозитории

- Добавлен современный лендинг в папке `site/` с:
  - адаптивным дизайном;
  - брендингом и графикой (логотип + иллюстрация);
  - блоками “Что это”, “Возможности”, “Как это работает”, FAQ;
  - формой захвата лидов (сохранение заявок в `localStorage`).

## Системные требования для скрипта установки

- 1 CPU
- 1 GB RAM
- 10 GB диска
- ОС Ubuntu 22 x64 или Ubuntu 24 x64

## Быстрый запуск Xray

```sh
wget -qO- https://raw.githubusercontent.com/ServerTechnologies/simple-xray-core/refs/heads/main/xray-install | bash
```

## Доступные CLI-команды после установки

- `userlist` — список клиентов
- `mainuser` — ссылка и QR-код основного пользователя
- `newuser` — создание нового пользователя
- `rmuser` — удаление пользователя
- `sharelink` — генерация ссылки для выбранного пользователя

## Как открыть новый лендинг локально

Из корня репозитория:

```sh
python3 -m http.server 8080
```

Откройте:

```text
http://localhost:8080/site/
```

## Полезные ссылки

- [GitHub проекта X-ray Core](https://github.com/XTLS/Xray-core)
- [Официальная документация XTLS (RU)](https://xtls.github.io/ru/)

## Удаление Xray (если потребуется)

```sh
bash -c "$(curl -L https://github.com/XTLS/Xray-install/raw/main/install-release.sh)" @ remove
rm /usr/local/etc/xray/config.json
rm /usr/local/etc/xray/.keys
rm /usr/local/bin/userlist
rm /usr/local/bin/mainuser
rm /usr/local/bin/newuser
rm /usr/local/bin/rmuser
rm /usr/local/bin/sharelink
```
