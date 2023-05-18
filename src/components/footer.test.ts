import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Footer } from './footer';

describe('Given the component Footer', () => {
  document.body.innerHTML = '<section></section>';

  describe('When it receices <section></section>', () => {
    // eslint-disable-next-line no-new
    new Footer('section', 'Pets');

    test('Then it should be in the document', () => {
      const element = screen.getByText('Pets');
      expect(element).toBeInTheDocument();
    });
  });
});
