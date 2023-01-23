import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/Motorcycle.service';

const motorcycleService = new MotorcycleService();

const motorclicleInput = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const motorcycleOutput = {
  id: '6348513f34c397abcad040b2',
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const motorclicleInputUpdate = {
  model: 'Honda Cb 600f',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 25.000,
  category: 'Street',
  engineCapacity: 600,
};

const motorcycleOutputUpdate = {
  id: '634852326b35b59438fbea2f',
  model: 'Honda Cb 600f',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 25.000,
  category: 'Street',
  engineCapacity: 600,
};

describe('Teste de motorcycleService', function () {
  it('É possível criar uma moto com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(motorcycleOutput);

    const result = await motorcycleService.create(motorclicleInput);

    const response = {
      status: 201,
      message: motorcycleOutput,
    };

    expect(result).to.be.deep.equal(response);

    sinon.restore();
  });

  it('É possível listar todas motos', async function () {
    sinon.stub(Model, 'find').resolves([motorcycleOutput]);

    const result = await motorcycleService.findAll();

    const response = {
      status: 200,
      message: [motorcycleOutput],
    };

    expect(result).to.be.deep.equal(response);

    sinon.restore();
  });

  it('É possível listar um motorcyclero pelo id', async function () {
    sinon.stub(Model, 'findById').resolves(motorcycleOutput);

    const result = await motorcycleService.findById(motorcycleOutput.id);

    const response = {
      status: 200,
      message: motorcycleOutput,
    };

    expect(result).to.be.deep.equal(response);

    sinon.restore();
  });

  it('Não é possível listar um motorcyclero com id inválido', async function () {
    sinon.stub(Model, 'findById').resolves(motorcycleOutput);

    const result = await motorcycleService.findById('6348513f3');

    const response = {
      status: 422,
      message: { message: 'Invalid mongo id' },
    };

    expect(result).to.be.deep.equal(response);

    sinon.restore();
  });

  it('Não é possível listar um motorcyclero inesistente', async function () {
    sinon.stub(Model, 'findById').resolves(null);

    const result = await motorcycleService.findById('6348513f34c397abcad040b3');

    const response = {
      status: 404,
      message: { message: 'Motorcycle not found' },
    };

    expect(result).to.be.deep.equal(response);

    sinon.restore();
  });

  it('É possível fazer alterações em um motorcyclero pelo id', async function () { 
    sinon.stub(Model, 'findByIdAndUpdate').resolves(motorcycleOutputUpdate);

    const result = await motorcycleService.update(motorcycleOutput.id, motorclicleInputUpdate);

    const response = {
      status: 200,
      message: motorcycleOutputUpdate,
    };

    expect(result).to.be.deep.equal(response);

    sinon.restore();
  });
});
