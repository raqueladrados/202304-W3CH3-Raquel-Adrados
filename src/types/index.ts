import { Dogs } from '../components/dogs';
import { Cats } from '../components/cats';

export const allPets = () => {
  const petsContainer = [
    new Dogs(22, 'Akita', 'dog', true, 'mother'),
    new Cats(42, 'Abyssinian', 'cat', false, 'mother'),
  ];

  return petsContainer;
};
