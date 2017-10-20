import React from 'react'
import styled, {keyframes} from 'styled-components'
import {Row, Col} from 'reactstrap'
import Link from 'next/link'
import Ink from 'react-ink'

import {Card, fadeIn} from './Layout'

const leftIcon = 'M15.422 16.078l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z'
const rightIcon = 'M9.984 6l6 6-6 6-1.406-1.406 4.594-4.594-4.594-4.594z'

const primary = '#007bff'
const primaryHover = '#036cdd'

const Icon = styled.svg`
  width: 2.1em;
  height: 2.1em;
  fill: white;
`

const Center = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  text-align: center;
`

const NavBtn = styled.button`
  appearance: none;
  outline: none !important;

  position: absolute;
  padding: 0.18em;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${primary};
  border: 2px solid white;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  cursor: pointer;

  animation-name: ${fadeIn};
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
  transition: all 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);

  &:hover {
    background: ${primaryHover};
    transform: scale(1.08);
  }
`

const Left = NavBtn.extend`left: -1.4em;`

const Right = NavBtn.extend`right: -1.4em;`

export const Character = styled.div`
  margin: 0 auto;
  min-height: 17em;
  width: 12em;
  background: linear-gradient(transparent, transparent, transparent, #8dd9e7), url("${props =>
    props.src}") no-repeat center;
  background-size: cover;

  animation-name: ${fadeIn};
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);

  transition: all 1s cubic-bezier(0.22, 0.61, 0.36, 1);

  &:hover {
    transform: translateY(-1em) scale(1.06);
  }
`

const NavButton = ({C, onClick, icon}) => (
  <C onClick={onClick}>
    <Ink />
    <Icon viewBox="0 0 24 24">
      <path d={icon} />
    </Icon>
  </C>
)

const Heading = styled.h2`
  margin-bottom: 0.6em;
  font-weight: 400;
  font-family: Roboto, Helvetica Neue, Prompt, Arial, sans-serif;
`

const Desc = styled.span``

const Selector = ({name, desc, image, index, max, left, right, C = Row}) => (
  <C>
    <Character src={image} />
    <Center>
      <Card>
        <Heading>{name}</Heading>
        <Desc>{desc}</Desc>
        {index > 0 && <NavButton icon={leftIcon} C={Left} onClick={left} />}
        {index < max - 1 && (
          <NavButton icon={rightIcon} C={Right} onClick={right} />
        )}
      </Card>
    </Center>
  </C>
)

export default Selector
