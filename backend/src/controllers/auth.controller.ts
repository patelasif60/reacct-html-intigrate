import { Request, Response } from 'express';
import { AuthService } from '../services/authService'

interface Params {
    [key: string]: number | string;
  }

export class AuthController {
    private authService: AuthService;
    public constructor() {
        this.authService = new AuthService();
    }
    public async register(req: Request, res: Response){
        try {
            const data = req.body as Params;
            const users = await this.authService.register(data);
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: error});
        }
    }
    public async login(req: Request, res: Response){
        try {
            const data = req.body as Params;
            const users = await this.authService.login(data);
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: error});
        }
    }
}