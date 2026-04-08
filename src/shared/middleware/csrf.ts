import csurf from 'csurf';
import type { RequestHandler } from 'express';

const csrfProtection: RequestHandler = csurf({
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  }
});

export default csrfProtection;