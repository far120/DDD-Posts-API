import mongoose from 'mongoose';

export default async function connectDatabase(): Promise<void> {
  try {
    const mongoUri = process.env.MONGODB_URI ;
    if(!mongoUri){
      throw new Error('❌MONGODB_URI is not defined');
    }
    const conn = await mongoose.connect(mongoUri);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('❌ Database Connection Error:', error);
    process.exit(1);
  }
};

