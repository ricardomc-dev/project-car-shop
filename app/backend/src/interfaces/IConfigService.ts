import { IBrand } from "./IBrand";
import { ICarModel } from "./ICarModel";
import { IColor } from "./IColor";
import { IGroup } from "./IGroup";

export interface IConfigService {
  createGroup(obj: IGroup): Promise<void>,
  readGroups(): Promise<object[]>,
  createBrand(obj: IBrand): Promise<void>,
  readBrands(): Promise<object[]>,
  createColor(obj: IColor): Promise<void>,
  readColors(): Promise<object[]>,
  createCarModel(obj: ICarModel): Promise<void>,
  readCarModels(): Promise<object[]>,
}
