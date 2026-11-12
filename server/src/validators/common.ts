import { z } from 'zod';

export const emailSchema = z.string().email('Invalid email address').trim().toLowerCase();

export const paginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(10),
});
