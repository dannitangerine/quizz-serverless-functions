export default function handler(req, res) {
console.log(req.method)
  res.status(200).json({ mensaje: 'Hola desde vercel' });
}