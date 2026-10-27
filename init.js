const sequelize = require('./database');
const User = require('./models/User')

async function init() {
    try {
        await sequelize.sync({ force: true });
        console.log('Таблицы синхронизированы');

        //Создание записи
        const user = await User.create({
            firstName: 'Иван',
            lastName: 'Петров',
            hobbies: 'Футбол, Книги, Музыка',
            age: 25,
        });
        const user2 = await User.create({
            firstName: 'Анна',
            lastName: 'Смирнова',
            hobbies: ['Рисование', 'Писательство'],
            age: 22,
        })
        console.log('Создан пользователь 1', user.toJSON())
        console.log('Создан пользователь 2', user2.toJSON())

        //Чтение записей
        const users = await User.findAll();
        console.log('Все пользователи', users.map(u => u.toJSON()));
    } catch (error) {
        console.log('Ошибка:', error);
    } finally {
        await sequelize.close();
    }
}

init()