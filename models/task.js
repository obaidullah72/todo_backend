import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  category: { type: String, default: 'General' },
  completed: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.models.Task || mongoose.model('Task', taskSchema);
