const jwt = require('jsonwebtoken');

// Create JWT Token
exports.createToken = (req, res) => {
    const payload = { username: 'testuser' }; // You can modify this for dynamic users
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
};
