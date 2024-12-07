import styled from "styled-components";

export const Item = styled.li`
 position: relative;
 transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    scale 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  cursor: pointer;

  &:hover {
    scale: 1.03;
  background-color: rgba(55, 59, 68, 0.4);
  border-radius: 14px;}  
`

export const Poster = styled.img`
  height: 340px;
  width: 240px;
  border-radius: 14px;
  border: 3px solid rgb(255, 199, 0);
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  color: black;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  padding-top: 8px;
  max-width: 240px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
   color: rgb(255, 199, 0);
  font-weight: 600;
  }
`

export const RemoveBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    scale: 1.1;
  }
`