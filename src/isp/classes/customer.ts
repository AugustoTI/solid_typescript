import {
  EnterpriseCostumerProtocol,
  IndividualCostumerProtocol,
} from './interfaces/customer-protocol';

export class IndividualCostumer implements IndividualCostumerProtocol {
  constructor(
    public fistName: string,
    public lastName: string,
    public CPF: string,
  ) {}
}

export class EnterpriseCostumer implements EnterpriseCostumerProtocol {
  constructor(public name: string, public CNPJ: string) {}
}
