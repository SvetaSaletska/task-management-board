import { initMongoConnection } from './db/initMongoConnection';
import { setupServer } from './server';

const bootstrap = async () => {
  try {
    await initMongoConnection();

    setupServer();
  } catch (error) {
    console.error(error);
  }
};

bootstrap();
