/* eslint-disable no-new */
import { Pet } from '../model/pet';

export const getPetList = (): Pet[] => {
  new Pet('Akita', 'dog');
  new Pet('Misifú', 'cat');
  new Pet('Pepita', 'hamster');
};
