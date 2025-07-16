import mongoose from 'mongoose';

let isConnected = false;

const dbConnect = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;
    console.log('✅ DB connected');
  } catch (err) {
    console.error('❌ DB connection error:', err);
  }
};

export default dbConnect;
