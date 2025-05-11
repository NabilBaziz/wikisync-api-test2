import express from 'express';
import { verifySupabaseJWT } from './middlewares/verifySupabaseJWT.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('WikiSync API is running');
});

app.get('/api/pages', verifySupabaseJWT, (req, res) => {
  res.json({
    message: 'Accès autorisé',
    user: req.user,
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
