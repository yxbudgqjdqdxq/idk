export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { message } = req.body;
  const reply = `You said: ${message}. You're amazing and deeply appreciated ❤️`;

  res.status(200).json({ reply });
}