import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/Car.service';

describe('Teste de CarService', function () {
  it('É possível criar um carro com sucesso', async function () {
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
      status: 201,
      message: { Car: {
        id: '6348513f34c397abcad040b2',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.990,
        doorsQty: 4,
        seatsQty: 5,
      } },
    };

    sinon.stub(Model, 'create').resolves(carOutput);

    const carService = new CarService();

    const result = await carService.create(carInput);

    expect(result).to.be.deep.equal(carOutput);
  });
});
