export class Pet {
  id;
  name;
  species;
  isAdopted;
  owner;

  // eslint-disable-next-line max-params
  constructor(
    id: number,
    name: string,
    species: string,
    isAdopted: boolean,
    owner: string
  ) {
    this.id = id;
    this.name = name;
    this.species = species;
    this.isAdopted = isAdopted;
    this.owner = owner;
  }
}
