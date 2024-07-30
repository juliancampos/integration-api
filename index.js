import 'dotenv/config';

import Server from './src/server/Server.js';

const server = new Server();

const start = async () => {
  server.start();
};

start();
