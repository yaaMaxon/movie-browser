import styled from "styled-components";

export const ListBox = styled.div`
  text-align: center;
  padding-top: 100px;
  padding-bottom: 30px;
`

export const List = styled.ul`
   display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`

export const LoadMore = styled.button`
  margin-top: 50px;
  padding: 8px 16px;
  background-color: #333;;
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
}

`

export const ScrollBtn = styled.button`
  // position: fixed;
  // bottom: 20px;
  // right: 20px;
  // background-color: #007bff;
  // color: white;
  // border: none;
  // border-radius: 50%;
  // padding: 10px 15px;
  // font-size: 20px;
  // box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  // cursor: pointer;
  // transition: background-color 0.3s ease;
  // z-index: 1000;

  // &:hover {
  //  background-color: #0056b3;
  // }

  // &:focus {
  //  outline: none;
  // }

  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: rgb(255, 199, 0); /* Заданий колір */
  color: white;
  border: none;
  border-radius: 50%;
  padding: 15px;
  font-size: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Легка тінь для сучасного вигляду */
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  z-index: 1000;

  &:hover {
   transform: scale(1.1); /* Ефект збільшення при наведенні */
   background-color: rgb(240, 185, 0); /* Трохи темніший відтінок при наведенні */
  }

  &:active {
   transform: scale(1); /* Забезпечує "натискання" без ефекту збільшення */
  }
  
  &:focus {
   outline: none;
  }
`