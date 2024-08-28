export default async function handler(req, res) {
    // Handle form submission
    if (req.method === 'POST') {
      const formData = req.body;
      
      // You can process the form data here if needed
      
      // Respond with a success status
      res.status(200).json({ message: 'Form submitted successfully' });
    } else {
      // Method not allowed
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }