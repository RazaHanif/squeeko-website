// This file is just for testing api in local dev
import "dotenv/config";
import express from 'express';
import { handler as leadHandler } from './api/lead.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.all('/api/lead', (req, res) => leadHandler(req, res));
app.all('/api/login', (req, res) => handler(req, res));

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});