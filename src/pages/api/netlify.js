export default async function handler(req, res) {
    // Handle POST requests (form submissions)
    if (req.method === 'POST') {
      const body = req.body;
      console.log('Form submission', body);
      res.status(200).json({ message: 'Form submitted successfully' });
    } 
    // Handle OPTIONS requests (CORS preflight)
    else if (req.method === 'OPTIONS') {
      res.status(200).end();
    }
    // Handle other request methods
    else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }