export default function handler(_req: any, res: any) {
  res.status(200).json({
    success: true,
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'ETIMS 2027 Vercel API',
    version: '1.0.0',
  });
}
