import React from 'react';
import { createRoot } from 'react-dom/client';

const Pizza = props => {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, props.name),
    React.createElement('p', null, props.description)
  );
};

const App = () => {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, "Welcome to Padre Gino's"),
    React.createElement('p', null, 'Your favorite Italian restaurant'),
    React.createElement(Pizza, {
      name: 'Pepperoni & Italian Sausage Pizza',
      description: 'Mozzarella Cheese, Pepperoni, Italian Sausage',
    }),
    React.createElement(Pizza, {
      name: 'Pepperoni Pizza',
      description: 'Mozzarella Cheese, Pepperoni',
    }),
    React.createElement(Pizza, {
      name: 'Italian Sausage Pizza',
      description: 'Mozzarella Cheese, Italian Sausage',
    })
  );
};

const root = createRoot(document.getElementById('root'));
root.render(React.createElement(App));
