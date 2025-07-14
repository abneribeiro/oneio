import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { UserRepository } from '../repositories/user.repository';
import type { UserInput, LoginInput } from '../types';

const JWT_SECRET = process.env.JWT_SECRET!;
const SALT_ROUNDS = 10;

export const AuthService = {
    async register(input: UserInput) {
        const existing = await UserRepository.findByEmail(input.email)
        if (existing.length) throw new Error('Email em uso')

        const hash = await bcrypt.hash(input.password, SALT_ROUNDS);
        const user = await UserRepository.create({ ...input, password: hash })

        const token = jwt.sign({ userId: user.id }, JWT_SECRET)

        return { user, token }
    },

    async login(input: LoginInput) {
        const [user] = await UserRepository.findByEmail(input.email);
        if (!user) throw new Error('Credencias invalidas');

        const valid = await bcrypt.compare(input.password, user.password)
        if (!valid) throw new Error('Credencias invalidas');

        const token = jwt.sign({ userId: user.id }, JWT_SECRET);
        
        const { password, ...userWithoutPassword } = user;
        return { user: userWithoutPassword, token };
    },

    async updateAccount(userId: number, input: UserInput) {
        await UserRepository.updatedByID(userId, input)
    },

    async deleteAccount(userId: number) {
        await UserRepository.deleledByID(userId);
    }
}