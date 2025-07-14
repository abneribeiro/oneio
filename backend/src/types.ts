import { userSchema, loginSchema } from './schemas/auth.schema';
import { z } from 'zod';


export type UserInput = z.infer<typeof userSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type JwtPayload = { userId: number };

export interface AuthRequest extends Request {
    user: JwtPayload
}

