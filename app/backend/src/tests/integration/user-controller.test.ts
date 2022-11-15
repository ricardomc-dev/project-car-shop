import * as sinon from 'sinon';
import chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { describe, it, before } from 'mocha';

import { Response } from 'superagent';
import { isTypedArray } from 'util/types';
import User from '../../database/models/User';
import app from '../../app';

import { userMock } from '../mocks/userMock';

chai.use(chaiHttp);

const { expect } = chai;

describe('User Controller', () => {
  before(async () => {
    sinon
      .stub(User, 'findOne')
      .resolves(null);
    sinon
      .stub(User, 'create')
      .resolves(userMock as User);
  });
  it('Criar um usuário com sucesso', async () => {
    const httpResponse = await chai.request(app).post('/register');

    expect(httpResponse.status).to.be.eq(201);
  });

  it('Retornar o novo usuário com sucesso', async () => {
    const httpResponse = await chai.request(app).post('/register');

    expect(httpResponse.body).to.be.eql({
      id: 1,
      name: 'rogerinho',
      email: 'rogerinho@mail.com',
      password: 'rogerinho123',
      role: 'seller'
    });
  });
});