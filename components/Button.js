import React from 'react'
import styled from 'styled-components'

const primary = '#007bff'
const primaryHover = '#036cdd'

const chosen = '#9b59b6'
const chosenHover = '#8e44ad'

const Button = styled.button`
  position: relative;
  border: none;
  outline: none !important;
  width: 100%;

  text-decoration: none !important;
  color: #fff !important;
  background: ${props => props.color || primary};
  box-shadow: 0 1px 1.5px 1px rgba(0, 0, 0, 0.12);

  white-space: nowrap;
  padding: 8px 14px;
  border-radius: 4px;
  font-size: 1.25em;
  font-weight: 300;
  font-family: Prompt, Arial, sans-serif;
  letter-spacing: 0.05em;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  margin: 0.5em auto 0.5em auto;

  &:hover {
    background: ${props => props.hoverColor || primaryHover};
    transform: translateY(-0.1em);
  }
`

export default Button
