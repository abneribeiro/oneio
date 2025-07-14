import { z } from 'zod';

export const CreateUserDto = z.object({
  username: z.string(),
  password: z.string(),
});