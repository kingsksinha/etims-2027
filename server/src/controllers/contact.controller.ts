import type { Request, Response } from 'express';
import { prisma } from '../config/database.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const submitContactMessage = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { name, email, subject, message } = req.body;

    let savedInDb = false;
    try {
      await prisma.contactMessage.create({
        data: {
          name,
          email,
          subject: subject || null,
          message,
        },
      });
      savedInDb = true;
    } catch (dbError) {
      console.warn(
        '[Contact Submission Notice] Database write fallback:',
        (dbError as Error).message
      );
      console.log('[Contact Message Received]', {
        name,
        email,
        subject,
        message,
        receivedAt: new Date().toISOString(),
      });
    }

    res.status(201).json({
      success: true,
      message:
        'Your inquiry has been successfully received by the Convenor Desk.',
      savedInDb,
    });
  }
);
