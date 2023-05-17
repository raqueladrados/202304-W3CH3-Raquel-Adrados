import { Pet } from './pet';

export class Dogs extends Pet {
  dogsOnomatopeia: string;

  // eslint-disable-next-line max-params
  constructor(
    id: number,
    name: string,
    species: string,
    isAdopted: boolean,
    owner: string
  ) {
    super(id, name, species, isAdopted, owner);
    this.dogsOnomatopeia = 'GuauGuau';
  }
}
