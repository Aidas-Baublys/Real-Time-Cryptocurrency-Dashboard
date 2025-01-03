import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { WebSocketServer, WebSocket } from 'ws';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express bbd cbb opapapapa 12123');
});

const server = app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

const wss = new WebSocketServer({ server });

wss.on('connection', ws => {
  console.log('New client connected');

  ws.on('message', message => {
    console.log(`Received message => ${message}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');

ws.on('open', () => {
  console.log('Connected to the WebSocket server');
});

ws.on('message', data => {
  const message = JSON.parse(data.toString());
  console.log(`Received message: ${message.p}`);

  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(message));
    }
  });
});

ws.on('close', () => {
  console.log('Disconnected from the WebSocket server');
});

ws.on('error', error => {
  console.error(`WebSocket error: ${error}`);
});
