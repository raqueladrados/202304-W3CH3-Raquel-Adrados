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
  species: string;

  constructor(public name: string) {
    this.species = '';
    this.id = Pet.randomId();
    this.isAdopted = true;
    this.owner = '';
  }
}
