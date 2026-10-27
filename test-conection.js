const sequelize = require("./database");

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log("Соединение с базой данных установлено успешно.");
    } catch (error) {
        console.error("Ошибка при подключении к базе данных:", error);
    }
}

testConnection();