import styled, { keyframes } from 'styled-components'

const slideAnimation = keyframes`
  from {
    transform: translateX(0);
  } 
  to {
    transform: translateX(-100%);
  }
`

export const LogosContainer = styled.div`
  overflow: hidden;
    /* padding: 60px 0; */
  background: transparent;
  position: relative;

  &:hover .logos-slide {
    animation-play-state: paused;
  }

  &:before,
  &:after {
    position: absolute;
    top: 0;
    width: 200px;
    height: 100px;
    content: '';
    z-index: 2;
    background: transparent;
  }

  /* &:before {
    left: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), #0f172a);
  }

  &:after {
    right: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), #0f172a);
  } */
`

export const LogosSlide = styled.div`
  /* display: inline-block;
  white-space: nowrap; */
  width: 4000px;
  animation: 200s ${slideAnimation} infinite linear;
  background: transparent;
`

export const LogoImage = styled.img`
  object-fit: contain;
  width: 130px;
  margin: 0 40px;
  background: transparent;
`