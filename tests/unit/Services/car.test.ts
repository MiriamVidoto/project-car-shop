import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/Car.service';

const carService = new CarService();

const carInput = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const carOutput = {
  id: '6348513f34c397abcad040b2',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const carInputUpdate = {
  model: 'Marea',
  year: 1992,
  color: 'Red',
  status: true,
  buyValue: 12.000,
  doorsQty: 2,
  seatsQty: 5,
};

const carOutputUpdate = {
  id: '634852326b35b59438fbea2f',
  model: 'Marea',
  year: 1992,
  color: 'Red',
  status: true,
  buyValue: 12.000,
  doorsQty: 2,
  seatsQty: 5,
};

describe('Teste de CarService', function () {
  it('É possível criar um carro com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(carOutput);

    const result = await carService.create(carInput);

    const response = {
      status: 201,
      message: carOutput,
    };

    expect(result).to.be.deep.equal(response);

    sinon.restore();
  });

  it('É possível listar todos os carros', async function () {
    sinon.stub(Model, 'find').resolves([carOutput]);

    const result = await carService.findAll();

    const response = {
      status: 200,
      message: [carOutput],
    };

    expect(result).to.be.deep.equal(response);

    sinon.restore();
  });

  it('É possível listar um carro pelo id', async function () {
    sinon.stub(Model, 'findById').resolves(carOutput);

    const result = await carService.findById(carOutput.id);

    const response = {
      status: 200,
      message: carOutput,
    };

    expect(result).to.be.deep.equal(response);

    sinon.restore();
  });

  it('Não é possível listar um carro com id inválido', async function () {
    sinon.stub(Model, 'findById').resolves(carOutput);

    const result = await carService.findById('6348513f3');

    const response = {
      status: 422,
      message: 'Invalid mongo id',
    };

    expect(result).to.be.deep.equal(response);

    sinon.restore();
  });

  it('Não é possível listar um carro inesistente', async function () {
    sinon.stub(Model, 'findById').resolves(null);

    const result = await carService.findById('6348513f34c397abcad040b3');

    const response = {
      status: 404,
      message: 'Car not found',
    };

    expect(result).to.be.deep.equal(response);

    sinon.restore();
  });

  it('É possível fazer alterações em um carro pelo id', async function () { 
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carOutputUpdate);

    const result = await carService.update(carOutput.id, carInputUpdate);

    const response = {
      status: 200,
      message: carOutputUpdate,
    };

    expect(result).to.be.deep.equal(response);

    sinon.restore();
  });
});
