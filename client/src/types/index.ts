// ── Domain types matching backend Prisma models ─────────────────

export interface Conference {
  id: string;
  name: string;
  acronym: string;
  edition: string;
  tagline?: string;
  description?: string;
  startDate: string;
  endDate: string;
  venue: string;
  city: string;
  state: string;
  country: string;
  website?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CommitteeMember {
  id: string;
  name: string;
  title?: string;
  affiliation?: string;
  role: string;
  category: string;
  photoUrl?: string;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface ResearchTrack {
  id: string;
  name: string;
  code: string;
  description?: string;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface ImportantDate {
  id: string;
  title: string;
  date: string;
  description?: string;
  type: string;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface Registration {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  affiliation?: string;
  designation?: string;
  category: string;
  paperTitle?: string;
  trackId?: string;
  paymentStatus: string;
  transactionId?: string;
  amountPaid?: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface PaperSubmission {
  id: string;
  title: string;
  abstract: string;
  keywords: string[];
  trackId: string;
  authors: string;
  correspondingEmail: string;
  fileUrl?: string;
  status: string;
  reviewComments?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  isRead: boolean;
  repliedAt?: string;
  createdAt: string;
  updatedAt: string;
}
