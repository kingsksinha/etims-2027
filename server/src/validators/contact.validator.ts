import { z } from 'zod';

export const contactMessageSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(120, 'Name is too long'),
  email: z.string().trim().email('Invalid email address').max(254, 'Email is too long'),
  phone: z.string().trim().max(30, 'Phone number is too long').optional().or(z.literal('')),
  subject: z.string().trim().max(200, 'Subject is too long').optional().or(z.literal('')),
  message: z.string().trim().min(5, 'Message must be at least 5 characters').max(4000, 'Message exceeds maximum length'),
});

export type ContactMessageInput = z.infer<typeof contactMessageSchema>;
