import { startServer } from './app/server';
import connectDatabase from './infrastructure/database/mongodb';
 
async function bootstrap() {
  await connectDatabase(); 
  startServer();    
}
 
bootstrap();
