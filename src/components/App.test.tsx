import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('renders learn react link', () => {
  render(<App />);
  const h1 = screen.getByText('counter');
  expect(h1).toBeInTheDocument();
});


test('initial value is 0', ()=> {
  const { getByTestId } = render(<App />);
  expect(getByTestId('count')).toHaveTextContent('0');
})

test('countUp', () => {
  const { getByTestId, getByText} = render(<App />);
  fireEvent.click(getByText('+'));
  expect(getByTestId('count')).toHaveTextContent('1');
})


test('countDown', ()=>{
  const { getByTestId, getByText} = render(<App />);
  fireEvent.click(getByText('-'));
  expect(getByTestId('count')).toHaveTextContent('0');
})


test('reset', ()=>{
  const { getByTestId, getByText} = render(<App />);
  fireEvent.click(getByText('reset'));
  expect(getByTestId('count')).toHaveTextContent('0');
});


test('count value can not be less than 0',()=>{
  const { getByTestId, getByText} = render(<App />);
  fireEvent.click(getByText('-'));
  fireEvent.click(getByText('-'));
  fireEvent.click(getByText('-'));

  expect(getByTestId('count')).toHaveTextContent('0');
})

test('asyncCountUp', () => {
  const { getByTestId, getByText} = render(<App />);
  jest.useFakeTimers();

  fireEvent.click(getByText('+1 after 3 sec'));
  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000);
})