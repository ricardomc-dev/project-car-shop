import { ErrorRequestHandler } from 'express';

const errors = (errorMessage: string) => {
  switch (errorMessage) {
    case 'invalid token':
      return { status: 401, message: 'Unauthorized user' };

    case 'Invalid login':
      return { status: 404, message: 'Invalid email or password' };

    case 'OrderNotFound':
      return { status: 404, message: 'Order does not exist' };

    case 'VehicleNotFound':
      return { status: 404, message: 'Vehicle does not exist' };
      
    case 'UserFound':
      return { status: 409, message: 'User already registered' };

    case 'UserNotFound':
      return { status: 404, message: 'User was not found' };
      
    default: 
      return { status: 500, message: errorMessage };
  }
};

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(400).json({ message: err.message });
  }

  const { status, message } = errors(err.message);
  return res.status(status).json({ message });
};

export default errorHandler;