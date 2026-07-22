import dotenv from 'dotenv';
dotenv.config();

export const SMTP_HOST = process.env.SMTP_HOST;
export const SMTP_PORT = process.env.SMTP_PORT;
export const SMTP_USERNAME = process.env.SMTP_USERNAME;
export const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
export const SMTP_FROM = process.env.SMTP_FROM;
export const SMTP_FROM_NAME = process.env.SMTP_FROM_NAME;
export const MAIL_TO = process.env.MAIL_TO;