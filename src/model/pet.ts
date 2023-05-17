export type PetObject = {
  id: number;
  name: string;
  species: string;
  isAdopted: boolean;
  owner: string;
};

export class Pet implements PetObject {
  static randomId() {
    return Math.random() * 1_000_000_000;
  }

  id: number;
  isAdopted: boolean;
  owner: string;

  // eslint-disable-next-line no-unused-vars
  constructor(public name: string, public species: string) {
    this.id = Pet.randomId();
    this.isAdopted = true;
    this.owner = '';
  }
}
