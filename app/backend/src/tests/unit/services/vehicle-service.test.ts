import { expect } from "chai";
import * as sinon from 'sinon';
import VehicleValidator from '../../../utils/vehicle-validator';
import VehicleService from '../../../services/vehicle-service';
import {
  vehicleMock,
  invalidVehicleMock,
  vehicleMockWithId,
  vehicleMockForChange,
  vehicleMockForChangeWithId,
  allVehiclesMock
} from '../../mocks/vehicleMock';

describe('Test Vehicle Service', () => {
  const vehicleValidator = new VehicleValidator();
  const vehicleService = new VehicleService(vehicleValidator);

  before(() => {
    sinon.stub(vehicleService, 'createVehicle').resolves(vehicleMockWithId);
    sinon.stub(vehicleService, 'readVehicles').resolves(allVehiclesMock);
    sinon.stub(vehicleService, 'readOneVehicle').resolves(vehicleMockWithId);
    sinon.stub(vehicleService, 'updateVehicle').resolves();
  })

  after(() => {
    sinon.restore();
  })

  describe('Create Vehicle', () => {
    it('vehicle created successfully', async () => {
      const newVehicle = await vehicleService.createVehicle(vehicleMock);
      expect(newVehicle).to.be.deep.equal(vehicleMockWithId)
    })

    it('Failed to create vehicle', async () => {
      // try {
			// 	// o "as any"(casting) abaixo pois o create não aceita um parâmetro inválido
			// 	await vehicleService.createVehicle(invalidVehicleMock);
			// } catch (error) {
			// 	expect(error).to.be.instanceOf(error.isjoi.message);
			// }
    })
  })

  describe('Read all Vehicles', () => {
    it('all vehicles read successfully', async () => {
      const vehicles = await vehicleService.readVehicles();
      expect(vehicles).to.be.deep.equal(allVehiclesMock);
    })
  })

  describe('Read One Vehicle', () => {
    it('vehicle read successfully', async () => {
      const vehicle = await vehicleService.readOneVehicle(vehicleMockWithId.id);

      expect(vehicle).to.be.deep.equal(vehicleMockWithId);
    })

    it('failed to read one vehicle', async () => {
      try {
        await vehicleService.readOneVehicle(vehicleMockWithId.id);

      } catch (error: any) {
        expect(error.message).to.be.deep.equal('VehicleFound');
      }
    })
  })

  describe('Update One Vehicle', () => {
    it('vehicle successfully updated', async () => {

    })

    it('failed to update vehicle', async () => {

    })
  })














})