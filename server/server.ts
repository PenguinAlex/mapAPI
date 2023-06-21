import express from 'express';
import path from 'path';

const app = express();
const tilesDirectory = path.join(__dirname, 'tiles'); // Путь к папке с тайлами

app.use(express.static(tilesDirectory)); // Делаем папку с тайлами доступной как статическое содержимое

app.get('/tiles/:zoom/:x/:y', (req, res) => {
    const { zoom, x, y } = req.params;
    const tilePath = path.join(tilesDirectory, zoom, x, `${y}.png`); // Путь к запрошенному тайлу

    res.sendFile(tilePath);
});

const port = 8000;
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
