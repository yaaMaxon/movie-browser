import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MainBox = styled.div`
  max-width: 1200px;
  min-height: 100vh;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const Header = styled.header`
  animation: glow 800ms ease-out infinite alternate;
  background-color: rgba(255, 255, 255, 0.1);
  padding-top: 14px;
  padding-bottom: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 4px #ffc700, 0 0 7px #ffc700, 0 0 7px #ffc700,
    0 0 7px rgba(0, 255, 0, 0.2), 0 0 12px #ffc700, 0 0 12px #ffc700,
    0 0 7px #ffc700, 0 0 12px #ffc700;
  border-radius: 20px;
`;

export const HeaderList = styled.nav`
  display: flex;
  gap: 30px;

  font-weight: 700;
  font-size: 28px;
`;

export const StyledNavLink = styled(NavLink)`
    color: #222;
    text-decoration: none;

    &:hover {
      color: rgb(255, 199, 0)
    };

    &.active {
      color: rgb(255, 199, 0)
    }
`