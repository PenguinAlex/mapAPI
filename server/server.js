"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const tilesDirectory = path_1.default.join(__dirname, 'tiles'); // Путь к папке с тайлами
app.use(express_1.default.static(tilesDirectory)); // Делаем папку с тайлами доступной как статическое содержимое
app.get('/tiles/:zoom/:x/:y', (req, res) => {
    const { zoom, x, y } = req.params;
    const tilePath = path_1.default.join(tilesDirectory, zoom, x, `${y}.png`); // Путь к запрошенному тайлу
    res.sendFile(tilePath);
});
const port = 8000;
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
