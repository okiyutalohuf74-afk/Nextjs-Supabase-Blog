# Royal Reels Direct

Веб-приложение публикаций **Royal Reels Direct** на [Next.js](https://nextjs.org/) (App Router) и [Supabase](https://supabase.com/) (аутентификация, база данных, хранилище файлов).

## Возможности

- Публичная лента материалов, категории, страницы постов
- Редактор контента и админ-раздел для авторов
- Комментарии, закладки, профиль пользователя
- Генерация Open Graph-изображений, загрузка медиа

## Требования

- Node.js 18+
- npm
- Проект Supabase (URL, anon key, схема БД)

## Быстрый старт

1. Клонируйте репозиторий и перейдите в каталог проекта.
2. Скопируйте переменные окружения: `cp .env.example .env.local` и заполните значения для Supabase и при необходимости почты/ConvertKit.
3. Установите зависимости:

   ```sh
   npm install --legacy-peer-deps
   ```

4. Запуск в режиме разработки:

   ```sh
   npm run dev
   ```

5. Откройте [http://localhost:3000](http://localhost:3000).

## Скрипты

| Команда        | Назначение                    |
| -------------- | ----------------------------- |
| `npm run dev`  | Локальная разработка          |
| `npm run build`| Сборка для продакшена        |
| `npm run start`| Запуск production-сборки      |
| `npm run lint` | Проверка ESLint               |

## Домен продакшена

Публичный сайт: [https://royalreelsdirect.com](https://royalreelsdirect.com)

## Лицензия

MIT (см. `package.json`).
