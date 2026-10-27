# Практическая работа: Sequelize + SQLite

## Описание
Проект демонстрирует работу с базой данных SQLite через ORM Sequelize на Node.js.

### Модель `User` (таблица `users`)
- `id` (INTEGER, Primary Key) — автоинкрементный идентификатор;
- `firstName` (STRING, allowNull: false) — имя пользователя (обязательное поле);
- `lastName` (STRING) — фамилия;
- `hobbies` (JSON) — увлечения пользователя;
- `age` (INTEGER) — возраст;
- `createdAt` / `updatedAt` (DATE) — временные метки Sequelize.

## Инструкция по запуску
1. Установка зависимостей:
   ```bash
   npm install
   ```
2. Проверка подключения к базе данных:
   ```bash
   node test-conection.js
   ```
3. Инициализация базы данных (создание таблицы, добавление записей и выборка):
   ```bash
   node init.js
   ```
