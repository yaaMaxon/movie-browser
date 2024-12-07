import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 50px 15px 0 15px;
  margin-bottom: 25px;

  align-items: center;
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const SearchLabel = styled.label`
  font-size: 32px;
  font-weight: 600;
  color: #222;
  text-align: center;
  text-transform: uppercase;

  margin-bottom: 30px;
`

export const SearchInput = styled.input`
  margin-top: 8px;
  margin-bottom: 30px;
  height: 40px;
  width: 500px;
  background: transparent;
  outline: none;
  border-radius: 10px;
  border: 2px solid rgb(255, 199, 0);
  font-size: 23px;
  color: #222;
  padding-left: 15px;
  padding-right: 15px;
`

export const SearchBtn = styled.button`
  padding: 8px 16px;
  background: #222;
  background: #333;
  color: #fff;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgb(255, 199, 0);
  border-radius: 10px;
  text-align: center;
  font-size: 18px;
  line-height: 24px;
  min-width: 180px;
  cursor: pointer;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
  0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    color: rgb(255, 199, 0);
  }
`