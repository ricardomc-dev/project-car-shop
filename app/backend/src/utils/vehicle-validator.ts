import Joi from 'joi';

const VEHICLE = Joi.object({
  licensePlate: Joi.string().min(7).max(7).required(),
  chassi: Joi.string().min(17).max(17).required(),
  renavam: Joi.string().min(11).max(11).required(),
  year: Joi.number().min(1980).max(2023).required(),
  carModelName: Joi.string().required(),
  colorName: Joi.string().required(),
  mileage: Joi.number().integer().required(),
  price: Joi.number().required(),
});

class VehicleValidator {
  valid(data: object): void {
    const { error } = VEHICLE.validate(data);
    if (error) throw error;
  }
}

export default VehicleValidator;
