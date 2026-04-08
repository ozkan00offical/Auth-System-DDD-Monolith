import express from 'express';
import userRouter from './modules/user/presentation/routes.ts';
import cors from 'cors';
import corsOptions from './shared/middleware/cors.ts';
import { rateLimitMiddleware } from './shared/middleware/rate-limiter.ts';
import cookieParser from 'cookie-parser';
import type { Request, Response } from 'express';
import csrfProtection from './shared/middleware/csrf.ts';
import helmet from 'helmet';

const app = express();

app.use(helmet());

app.use(rateLimitMiddleware);

app.use(cors(corsOptions));

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use(cookieParser());

app.use(csrfProtection);

app.use("/auth", userRouter);

app.get('/csrf-token', (req: Request, res: Response) => {
  res.json({ csrfToken: req.csrfToken() });
});

export default app;