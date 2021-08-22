import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import DashboardRoutes from '../../routers/DashboardRoutes';
import { AuthContext } from '../../auth/AuthContext';

describe('Pruebas en <DashboardRoutes />', () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: 'Juanito',
    },
  };

  test('debe mostrarse correctamente', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('Juanito');
  });
});