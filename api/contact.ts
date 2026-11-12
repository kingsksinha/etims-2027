export default async function handler(req: any, res: any) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
    return;
  }

  const { name, email, phone, subject, message } = req.body || {};

  if (!name || typeof name !== 'string' || !name.trim()) {
    res.status(400).json({ success: false, message: 'Name is required' });
    return;
  }

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    res.status(400).json({ success: false, message: 'Valid email is required' });
    return;
  }

  if (!message || typeof message !== 'string' || !message.trim()) {
    res.status(400).json({ success: false, message: 'Message is required' });
    return;
  }

  console.log('[ETIMS 2027 Inquiry Received via Vercel]', {
    name: name.trim(),
    email: email.trim(),
    phone: phone ? String(phone).trim() : null,
    subject: subject ? String(subject).trim() : null,
    message: message.trim(),
    timestamp: new Date().toISOString(),
  });

  res.status(201).json({
    success: true,
    message: 'Your inquiry has been successfully received by the Convenor Desk at NSIT Bihta, Patna.',
    timestamp: new Date().toISOString(),
  });
}
