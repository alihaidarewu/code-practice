const Portfolio = require('../models/Portfolio');

// Create Portfolio
exports.createPortfolio = async (req, res) => {
  const { title, description, img, codelink, livelink } = req.body;

  const portfolio = new Portfolio({
    title,
    description,
    img,
    codelink,
    livelink,
    user: req.user.id,
  });

  try {
    await portfolio.save();
    res.status(201).json(portfolio);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get All Portfolios
exports.getAllPortfolios = async (req, res) => {
  try {
    const portfolios = await Portfolio.find();
    res.status(200).json(portfolios);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update Portfolio
exports.updatePortfolio = async (req, res) => {
  const { id } = req.params;
  const { title, description, img, codelink, livelink } = req.body;

  try {
    const portfolio = await Portfolio.findById(id);
    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }

    if (portfolio.user.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    portfolio.title = title || portfolio.title;
    portfolio.description = description || portfolio.description;
    portfolio.img = img || portfolio.img;
    portfolio.codelink = codelink || portfolio.codelink;
    portfolio.livelink = livelink || portfolio.livelink;

    await portfolio.save();
    res.status(200).json(portfolio);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete Portfolio
exports.deletePortfolio = async (req, res) => {
  const { id } = req.params;

  try {
    const portfolio = await Portfolio.findById(id);
    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }

    if (portfolio.user.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    await portfolio.remove();
    res.status(200).json({ message: 'Portfolio deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
