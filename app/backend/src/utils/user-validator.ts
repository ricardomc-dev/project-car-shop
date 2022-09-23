import Joi from 'joi';

const USER = Joi.object({
  name: Joi.string().min(12).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().required(),
});

class UserValidator {
  valid(data: object): void {
    const { error } = USER.validate(data);
    if (error) throw error;
  }
}

export default UserValidator;
