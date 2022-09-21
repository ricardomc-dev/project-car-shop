import express, {Request, Response, NextFunction } from 'express';
import cors from 'cors';
// import UserController from './controllers/user-controller';
// import UserService from './services/user-service';
// import EmailValidator from './services/email-validator';
// import TokenGenerator from './services/token-generator';
// import TicketController from './controllers/ticket-controller';
// import TicketService from './services/ticket-service';
// import Jwt from './middlewares/jwt';
// import CablewayController from './controllers/cableway-controller';
// import CablewayService from './services/cableway-service';

// const emailValidator = new EmailValidator();
// const tokenGenerator = new TokenGenerator();
// const userService = new UserService(emailValidator, tokenGenerator);
// const ticketService = new TicketService();
// const ticketController = new TicketController(ticketService);
// const cablewayService = new CablewayService();
// const cablewayController = new CablewayController(cablewayService);

// const jwt = new Jwt();

const app = express();

app.use(cors());
app.use(express.json());



// app.post('/register', (req: Request, res: Response) => {
//   new UserController(userService).register(req, res);
// });

// app.post('/login', (req: Request, res: Response) => {
//   new UserController(userService).login(req, res);
// });

// app.post('/buyticket/:id', jwt.validate, (req, res, next) => {
//   ticketController.buy(req, res, next);
// });

// app.get('/cableway/:id', async (req: Request, res: Response, next: NextFunction) => {
//   cablewayController.getById(req, res, next);
// });

// app.get('/cableway', async (req: Request, res: Response) => {
//   cablewayController.getAll(req, res);
// });

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  if (err.status) {
    return res.status(err.status).json({ error: err.message })
  }
  return res.status(500).json({ error: err.message})
});

export default app;