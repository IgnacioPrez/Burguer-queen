import styled, { keyframes } from 'styled-components'

const swing = keyframes`
  0% {
    transform: rotate(0deg);
    animation-timing-function: ease-out;
  }
  25% {
    transform: rotate(70deg);
    animation-timing-function: ease-in;
  }
  50% {
    transform: rotate(0deg);
    animation-timing-function: linear;
  }
`

const swing2 = keyframes`
  0% {
    transform: rotate(0deg);
    animation-timing-function: linear;
  }
  50% {
    transform: rotate(0deg);
    animation-timing-function: ease-out;
  }
  75% {
    transform: rotate(-70deg);
    animation-timing-function: ease-in;
  }
`

export const LoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NewtonsCradleContainer = styled.div`
  --uib-size: 70px;
  --uib-speed: 1.2s;
  --uib-color: #474554;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--uib-size);
  height: var(--uib-size);
`

export const NewtonsCradleDot = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  width: 25%;
  transform-origin: center top;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 25%;
    border-radius: 50%;
    background-color: var(--uib-color);
  }

  &:first-child {
    animation: ${swing} var(--uib-speed) linear infinite;
  }

  &:last-child {
    animation: ${swing2} var(--uib-speed) linear infinite;
  }
`
