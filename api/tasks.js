import dbConnect from '../utils/db.js';
import Task from '../models/task.js';

export default async function handler(req, res) {
  await dbConnect();

  const { method, query, body } = req;

  try {
    switch (method) {
      case 'GET':
        const tasks = await Task.find().sort({ createdAt: -1 });
        return res.status(200).json(tasks);

      case 'POST':
        const newTask = new Task({
          title: body.title,
          description: body.description || '',
          category: body.category || 'General',
          completed: body.completed || false
        });
        await newTask.save();
        return res.status(201).json(newTask);

      case 'PUT':
        if (!query.id) return res.status(400).json({ message: 'Task ID required' });

        const updatedTask = await Task.findByIdAndUpdate(
          query.id,
          {
            title: body.title,
            description: body.description,
            category: body.category,
            completed: body.completed
          },
          { new: true }
        );

        if (!updatedTask) {
          return res.status(404).json({ message: 'Task not found' });
        }

        return res.status(200).json(updatedTask);

      case 'DELETE':
        if (!query.id) return res.status(400).json({ message: 'Task ID required' });

        const deletedTask = await Task.findByIdAndDelete(query.id);
        if (!deletedTask) {
          return res.status(404).json({ message: 'Task not found' });
        }

        return res.status(200).json({ message: 'Task deleted successfully' });

      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        return res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
