import Brand from "../database/models/Brand";
import Group from "../database/models/Group";
import Color from "../database/models/Color";
import CarModel from "../database/models/CarModel";
import { IConfigService } from "../interfaces/IConfigService";
import { IGroup } from "../interfaces/IGroup";
import { IBrand } from "../interfaces/IBrand";
import { IColor } from "../interfaces/IColor";
import { ICarModelBody } from "../interfaces/ICarModel";

class ConfigService implements IConfigService {
  constructor(private configValidator: any) {
    this.configValidator = configValidator;
  }

  async createGroup(data: IGroup): Promise<void> {
    this.configValidator.groupValid(data);
    await Group.create({ groupName: data.groupName })
  }

  async readGroups(): Promise<object[]> {
    const groups = await Group.findAll();
    return groups;
  }

  async createBrand(data: IBrand): Promise<void> {
    this.configValidator.brandValid(data);
    await Brand.create({ brandName: data.brandName });
  }

  async readBrands(): Promise<object[]> {
    const brands = await Brand.findAll();
    return brands;
  }

  async createColor(data: IColor): Promise<void> {
    this.configValidator.colorValid(data);
    await Color.create({ colorName: data.colorName });
  }

  async readColors(): Promise<object[]> {
    const colors = await Color.findAll();
    return colors;
  }

  async createCarModel(data: ICarModelBody): Promise<void> {
    this.configValidator.carModelValid(data);

    const brand = await Brand.findOne({ where: { brandName: data.brandName }})
    const brandId = brand?.id;

    const group = await Group.findOne({ where: { groupName: data.groupName }})
    const groupId = group?.id;

    await CarModel.create({
      carModelName: data.carModelName,
      brandId,
      groupId,
      urlImage: data.urlImage,
    });
  }

  async readCarModels(): Promise<object[]> {
    const carModels = await CarModel.findAll({
      include: [
        { model: Brand, as: 'brand', attributes: { exclude: ['id'] } },
        { model: Group, as: 'group', attributes: { exclude: ['id'] } },
      ],
      attributes: { exclude: ['brandId', 'groupId'] },
    });
    return carModels;
  }
}

export default ConfigService;
