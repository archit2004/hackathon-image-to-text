
import jwt from 'jsonwebtoken';
import User from '../models/User';

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token || !token.startsWith('Bearer ')) return res.status(401).json({ message: 'No token provided' });

  try {
    const jwtToken = token.split(' ')[1];
    const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    if (!req.user) {
        return res.status(401).json({ message: 'User not found' });
      }
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
export default authMiddleware;
