import express,{ Application, Request, Response } from 'express';
import { Router } from 'express';
import userRoute  from './user';
import { AuthController } from '../../controllers/auth.controller';

class ApiRoute {

  public router: Router;
  public controller : AuthController;

  constructor() {
    this.router = Router();
    this.initRoutes();
    this.controller = new AuthController();
  }

  public initRoutes() {
    this.router.use('/users',userRoute.router);
    this.router.get('/', (req,res) => { res.send("In api route");});
    this.router.post('/register',(req, res) => this.controller.register(req, res));
    this.router.post('/login',(req, res) => this.controller.login(req, res));
  }
}

const apiRoute = new ApiRoute();

export default apiRoute;