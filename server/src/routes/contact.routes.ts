import { Router } from 'express';
import { submitContactMessage } from '../controllers/contact.controller.js';
import { validate } from '../middleware/validate.js';
import { contactMessageSchema } from '../validators/contact.validator.js';

const router = Router();

router.post('/', validate(contactMessageSchema), submitContactMessage);

export default router;
