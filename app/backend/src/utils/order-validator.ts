import Joi from 'joi';

const ORDER = Joi.object({
  sellerName: Joi.string().required(),
  vehicleId: Joi.number().required(),
  status: Joi.string().required(),
});

class OrderValidator {
  valid(data: object): void {
    const { error } = ORDER.validate(data);
    if (error) throw error;
  }
}

export default OrderValidator;