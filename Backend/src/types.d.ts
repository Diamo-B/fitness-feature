import { Request } from 'express';

declare module 'express' {
  interface Request {
    user?: any; // Define your custom user field here
  }
}
