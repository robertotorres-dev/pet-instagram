import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const Nav = styled.nav`
  align-items: center;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  bottom: 0;
  display: flex;
  height: 50px;
  justify-content: space-around;
  margin: 0 auto;
  left: 0;
  right: 0;
  max-width: 500px;
  position: fixed;
  z-index: 100;
  width: 100%;
`

export const Link = styled(LinkRouter)`
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
`
