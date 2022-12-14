export interface ICarModel {
  id?: number;
  carModelName: string;
  brandId?: number;
  groupId?: number;
  urlImage: string;
}

export interface ICarModelBody extends ICarModel {
  brandName: string;
  groupName: string;
}
