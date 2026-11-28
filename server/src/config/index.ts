const NODE_ENV = process.env.NODE_ENV || 'development';
const rawJwtSecret = process.env.JWT_SECRET;

if (
  NODE_ENV === 'production' &&
  (!rawJwtSecret || rawJwtSecret === 'dev-secret-change-me' || rawJwtSecret.length < 32)
) {
  throw new Error('Fatal: A strong JWT_SECRET (minimum 32 characters) is required in production.');
}

export const env = {
  NODE_ENV,
  PORT: parseInt(process.env.PORT || '5000', 10),
  DATABASE_URL: process.env.DATABASE_URL || '',
  JWT_SECRET: rawJwtSecret || 'dev-secret-change-me',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '7d',
  CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:5173',
};
