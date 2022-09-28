import Joi from 'joi';

const GROUP = Joi.object({
  groupName: Joi.string().required(),
});

const BRAND = Joi.object({
  brandName: Joi.string().required(),
});

const COLOR = Joi.object({
  colorName: Joi.string().required(),
});

const CAR_MODEL = Joi.object({
  carModelName: Joi.string().required(),
  brandName: Joi.string().required(),
  groupName: Joi.string().required(),
  urlImage: Joi.string().required(),
});


class ConfigValidator {
  groupValid(data: object): void {
    const { error } = GROUP.validate(data);
    if (error) throw error;
  }

  brandValid(data: object): void {
    const { error } = BRAND.validate(data);
    if (error) throw error;
  }

  colorValid(data: object): void {
    const { error } = COLOR.validate(data);
    if (error) throw error;
  }

  carModelValid(data: object): void {
    const { error } = CAR_MODEL.validate(data);
    if (error) throw error;
  }
}

export default ConfigValidator;