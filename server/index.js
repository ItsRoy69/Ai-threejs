import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalleRoutes from './routes/dalle.routes.js';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

const app = express();
app.use(cors());
app.use(express.json({ limig: "50mb" }))

app.use("/api/v1/dalle", dalleRoutes);


const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const User = mongoose.model('User', userSchema);

app.post('/api/v1/login', async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    if (email === 'jyotirmoyroy649@gmail.com') {
      res.json({ message: 'Login successful' });
    } else {
      res.status(400).json({ message: 'Error: Invalid email' });
    }
  } else {
    res.status(400).json({ message: 'Error: User not found' });
  }
});


app.get('/', (req, res) => {
  res.status(200).json({ message: "Hello from DALL.E" })
})

app.listen(8080, () => console.log('Server has started on port 8080'))