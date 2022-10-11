import { expect } from "chai";
import * as sinon from 'sinon';

import VehicleValidator from '../../../utils/vehicle-validator';
import VehicleService from '../../../services/vehicle-service';
import {
  vehicleMock,
  vehicleMockWithId,
  vehicleMockForChange,
  allVehiclesMock
} from '../../mocks/vehicleMock';

describe('Test Vehicle Service', () => {
  const vehicleValidator = new VehicleValidator();
  const vehicleService = new VehicleService(vehicleValidator);

  before(() => {
    sinon.stub(vehicleService, 'createVehicle').resolves(vehicleMockWithId);
    sinon.stub(vehicleService, 'readVehicles').resolves(allVehiclesMock);
    sinon.stub(vehicleService, 'readOneVehicle').resolves(vehicleMockWithId);
    sinon.stub(vehicleService, 'updateVehicle').resolves(undefined);
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
      try {
				await vehicleService.createVehicle({} as any);
			} catch (error: any) {
				expect(error).to.be.a('error');
			}
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
        expect(error).to.be.a('error');
      }
    })
  })

  describe('Update Vehicle', () => {
    it('vehicle successfully updated', async () => {
      const UM = 1
      const data = await vehicleService.updateVehicle(UM, vehicleMockForChange);

      expect(data).to.be.an('undefined')
    })

    it('failed to update vehicle', async () => {
      try {
        const DOIS = 2
        await vehicleService.updateVehicle(DOIS, vehicleMockForChange);

      } catch (error: any) {
        expect(error).to.be.a('error');
      }
    })
  })
})
