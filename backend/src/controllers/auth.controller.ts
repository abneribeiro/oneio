import type { Request, Response } from "express";
import { userSchema, loginSchema } from "../schemas/auth.schema";
import { AuthService } from "../services/auth.service";
import { AuthRequest } from "../types";



export const AuthController = {
    async register(req: Request, res: Response) {
        try {
            const data = userSchema.parse(req.body)
            const { user, token } = await AuthService.register(data)
            res.status(201).json({ user, token })
        } catch (err: any) {
            res.status(400).json({ error: err.message })
        }
    },
    async login(req: Request, res: Response) {
        try {
            const data = loginSchema.parse(req.body)
            const { user, token } = await AuthService.login(data);

            res.status(200).json({ user, token })
        } catch (err: any) {
            res.status(400).json({ error: err.message })
        }
    },

    async updateAccount(req: AuthRequest, res: Response) {
        try {
            const userId = req.user.userId
            const data = userSchema.parse(req.body);
            await AuthService.updateAccount(userId, data)
            res.status(200).send()
        } catch (err: any) {
            res.status(400).json({error: err.message})
        }
    },

    async deleteAccount(req: AuthRequest, res: Response) {
        try {
            const userId = req.user.userId;
            await AuthService.deleteAccount(userId);
            res.status(204).send()
        } catch (err: any) {
            res.status(400).json({ error: err.message })
        }
    }
}