import { Router, Request, Response, NextFunction } from "express";
import { AuthController } from "../controllers/auth.controller";
import jwt, { JwtPayload } from "jsonwebtoken";

const router = Router();

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const auth = req.headers.authorization?.split(' ')[1];
    if (!auth) return res.status(401).json({ error: 'Não autorizado' })

    try {
        const user = jwt.verify(auth, process.env.JWT_SECRET!) as JwtPayload;
        (req as any).user = user;
        next();
    } catch {
        res.status(401).json({ error: 'Token inválido' })
    }
}

// TODO Falta o update controller 
router.delete('/me', authMiddleware, AuthController.deleteAccount as any)

export default router