import { render, screen, } from '@testing-library/react';
import React from 'react'
import Home from './components/Home/Home'
import Register from './components/Register'
import Login from './components/Login'


test('div45', () => {
  render(<Home />);
  const linkElement = screen.getByTestId('hometest');
  expect(linkElement).toBeInTheDocument();
});

test('ctdiv', () => {
  render(<Register />);
  const linkElement = screen.getByTestId('RegisterTest');
  expect(linkElement).toBeInTheDocument();
});

test('ctdiv', () => {
  render(<Login />);
  const linkElement = screen.getByTestId('LoginTest');
  expect(linkElement).toBeInTheDocument();
});


test("RegisterTest", () => {
  render(<Register />)

  const passwordInput = screen.getByPlaceholderText(/your password/i);

  expect(passwordInput).toBeInTheDocument()
})

test("RegisterTest", () => {
  render(<Register />)

  const usernameInput = screen.getByPlaceholderText(/your username/i);

  expect(usernameInput).toBeInTheDocument()
})

test("LoginTest", () => {
  render(<Register />)

  const passwordInput = screen.getByPlaceholderText(/your password/i);

  expect(passwordInput).toBeInTheDocument()
})

test("LoginTest", () => {
  render(<Register />)

  const usernameInput = screen.getByPlaceholderText(/your username/i);

  expect(usernameInput).toBeInTheDocument()


})