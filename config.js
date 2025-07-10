const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '7921220953:AAHWLZEGBfsZEP84kFxK3Zi8Y58OKpZ7w2I',
  id: isNaN(parsedId) ? 6256256850 : parsedId // replace 12345.. with your telegram chat id
};
