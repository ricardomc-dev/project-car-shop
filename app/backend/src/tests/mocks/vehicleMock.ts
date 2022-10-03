import { IVehicle, IVehicleBody } from '../../interfaces/IVehicle';

const vehicleMock: IVehicleBody = {
  licensePlate: 'ABC2D34',
  chassi: '9BRQWERTYU0107789',
  renavam: '00123456789',
  year: 2017,
  carModelName: 'Kwid',
  colorName: 'Bege',
  mileage: 19500,
  price: 40000,
}

const invalidVehicleMock: IVehicleBody = {
  licensePlate: 'xxx',
  chassi: '9BRQWERTYU0107789',
  renavam: '00123456789',
  year: 2017,
  carModelName: 'Kwid',
  colorName: 'Bege',
  mileage: 19500,
  price: 40000,
}

const vehicleMockWithId: IVehicle = {
  id: 1,
  licensePlate: 'ABC2D34',
  chassi: '9BRQWERTYU0107789',
  renavam: '00123456789',
  year: 2017,
  carModelId: 39,
  colorId: 3,
  mileage: 19500,
  price: 40000,
}

const vehicleMockForChange: IVehicle = {
  licensePlate: 'ABC2D34',
  chassi: '9BRQWERTYU0107789',
  renavam: '00123456789',
  year: 2017,
  carModelId: 39,
  colorId: 3,
  mileage: 25000,
  price: 30000,
}

const vehicleMockForChangeWithId: IVehicle = {
  id: 1,
  licensePlate: 'ABC2D34',
  chassi: '9BRQWERTYU0107789',
  renavam: '00123456789',
  year: 2017,
  carModelId: 39,
  colorId: 3,
  mileage: 25000,
  price: 30000,
}

const allVehiclesMock: IVehicle[] = [
  {
    id: 1,
    licensePlate: 'ABC2D34',
    chassi: '9BRQWERTYU0107789',
    renavam: '00123456789',
    year: 2017,
    carModelId: 39,
    colorId: 3,
    mileage: 25000,
    price: 30000,
  },
  {
    id: 2,
    licensePlate: 'ZZZ6X56',
    chassi: '9BRASDFGHJ0104456',
    renavam: '00987456123',
    year: 2015,
    carModelId: 16,
    colorId: 4,
    mileage: 18000,
    price: 45000,
  }
]

export {
  vehicleMock,
  invalidVehicleMock,
  vehicleMockWithId,
  vehicleMockForChange,
  vehicleMockForChangeWithId,
  allVehiclesMock
}

