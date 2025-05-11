"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const verifySupabaseJWT_js_1 = require("./middlewares/verifySupabaseJWT.js");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('WikiSync API is running');
});
app.get('/api/pages', verifySupabaseJWT_js_1.verifySupabaseJWT, (req, res) => {
    res.json({
        message: 'Accès autorisé',
        user: req.user,
    });
});
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
