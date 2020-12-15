import { render, screen, fireEvent } from '@testing-library/react';

import React from 'react';
import Home from '../../pages/Home';

jest.mock('../../components/Modal/Address/Map', () => () => <div />);
jest.mock('../../components/Modal/Address/List', () => () => <div />);

describe('Testing Mobile Menu', () => {
  afterEach(() => {
    global.innerWidth = 1024;
    global.dispatchEvent(new Event('resize'));
  });

  it('should be able to open and close mobile menu', () => {
    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));

    render(<Home />);

    const mobileMenu = screen.getByRole('navigation');

    expect(mobileMenu).toHaveStyle({ width: '0px' });

    fireEvent.click(screen.getByLabelText(/handle menu/i));
    expect(mobileMenu).toHaveStyle({ width: '100%' });

    fireEvent.click(screen.getByLabelText(/handle menu/i));
    expect(mobileMenu).toHaveStyle({ width: '0px' });
  });
});

describe('Testing Featured Products', () => {
  it('should be able to list featured product', () => {
    render(<Home />);

    const product = screen.getByRole('button', { name: /skol pilsen/i });

    expect(product).toBeInTheDocument();
  });

  it('should be able to open address modal when click on featured product', async () => {
    render(<Home />);

    fireEvent.click(screen.getByRole('button', { name: /jack daniel's/i }));

    const modal = screen.getByTestId('modal-container');

    expect(modal).toBeInTheDocument();
  });
});

describe('Testing Address Input and Button', () => {
  it('should be able to open address modal when click on input', async () => {
    render(<Home />);

    fireEvent.click(screen.getByRole('button', { name: /continuar/i }));

    const modal = screen.getByTestId('modal-container');

    expect(modal).toBeInTheDocument();
  });

  it('should be able to open address modal when click on button', async () => {
    render(<Home />);

    fireEvent.click(screen.getByPlaceholderText(/informe seu endereço/i));

    const modal = screen.getByTestId('modal-container');

    expect(modal).toBeInTheDocument();
  });
});

describe('Testing Featured Categories', () => {
  it('should be able to open address modal when click on featured category', async () => {
    render(<Home />);

    fireEvent.click(screen.getByTestId('featured-category-btn-0'));

    const modal = screen.getByTestId('modal-container');

    expect(modal).toBeInTheDocument();
  });
});
