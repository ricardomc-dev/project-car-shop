import { expect } from "chai";
import * as sinon from 'sinon';

import { NextFunction, Request, Response } from 'express';
import {
  vehicleMock,
  vehicleMockWithId,
  vehicleMockForChange,
  allVehiclesMock
} from '../../mocks/vehicleMock';

import VehicleController from '../../../controllers/vehicle-controller';
import VehicleService from "../../../services/vehicle-service";
import VehicleValidator from '../../../utils/vehicle-validator';

describe('Vehicle Controller', () => {
  const vehicleValidator = new VehicleValidator();
  const service = new VehicleService(vehicleValidator);
  const controller = new VehicleController(service);
  const req = {} as Request; 
  const res = {} as Response;
  const next = {} as NextFunction;

  before(() => {
    sinon.stub(service, 'createVehicle').resolves(vehicleMockWithId);
    sinon.stub(service, 'readVehicles').resolves(allVehiclesMock);
    sinon.stub(service, 'readOneVehicle').resolves(vehicleMockWithId);
    sinon.stub(service, 'updateVehicle').resolves(undefined);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  })

  after(() => {
    sinon.restore()
  })

  describe('Create Vehicle', () => {
    it('vehicle created successfully', async () => {
      req.body = vehicleMock;
      await controller.createVehicle(req, res, next)
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(vehicleMockWithId)).to.be.true;
    })
  })

  describe('Read all Vehicles', () => {
    it('all vehicles read successfully', async () => {
      await controller.readVehicles(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(allVehiclesMock)).to.be.true;
    })
  })

  describe('Read One Vehicle', () => {
    it('vehicle read successfully', async () => {
      req.params = { id: String(vehicleMockWithId.id)};
      await controller.readOneVehicle(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(vehicleMockWithId)).to.be.true;
    })
  })

  describe('Update Vehicle', () => {
    it('vehicle successfully updated', async () => {
      req.params = { id: String(vehicleMockWithId.id)}
      req.body = vehicleMock
      await controller.updateVehicle(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith()).to.be.true;
    })
  })
})
