import styled from "styled-components";

export const MainBox = styled.div`
  max-width: 1200px;
  min-height: 100vh;
  padding-top: 25px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const GoBack = styled.button`
  margin-top: 35px;
  margin-bottom: 10px;
  padding: 8px 16px;
  color: white;

  background: #333;
  border: 1px solid #ffc700;
  border-radius: 10px;

  text-transform: uppercase;
  cursor: pointer;
  font-weight: 550;
  font-size: 14px;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
  0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover {
   color: #ffc700;
  }
`

export const DetailsBox = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
  margin-bottom: 16px;
`

export const Poster = styled.img`
  max-width: 182px;
  border-radius: 15px;
`

export const Title = styled.h1`
  font-size: 26px;
  margin-bottom: 12px;
  color: #222;
  padding-top: 12px;
`

export const SubTitle = styled.p`
  font-size: 16px;
  margin-bottom: 6px;
  color: #222;
`

export const Overview = styled.h2`
  font-size: 16px;
  color: #888888;
  margin-bottom: 12px;
`

export const Genre = styled.p`
  font-size: 16px;
  color: #888888;
`