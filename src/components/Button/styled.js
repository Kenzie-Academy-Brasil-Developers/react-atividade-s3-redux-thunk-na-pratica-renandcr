import styled from "styled-components";

const Container = styled.section`
  width: 500px;
  padding: 15px;
  border-radius: 6px;
  box-sizing: border-box;
  box-shadow: 0 4px 32px -12px #00000062;
  display: flex;
  flex-direction: column;
  background-color: #626e60;
  background-color: #155765;

  h1 {
    margin: 0;
    margin-bottom: 10px;
    padding: 0;
    max-width: 100%;
    font-size: 30px;
    color: #cda34f;
    text-align: left;
  }

  p {
    font-size: 16px;
    margin: 0;
    margin: 5px 0 5px 0;
    display: flex;
    align-items: center;
    padding: 6px 10px;
    text-align: left;
    height: 40px;
    border-radius: 6px;
    background-color: #f8eee7;
    background-color: #155765;
    background-color: #626e60;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      margin: 0;
      padding-left: 10px;
      margin-top: 10px;
      width: 70%;
      height: 45px;
      border: none;
      border-radius: 6px;
      background-color: #f8eee7;
      color: #373737;
      font-size: 14px;
      font-weight: 600;
    }

    button {
      margin: 0;
      margin: 10px 0 0 10px;
      cursor: pointer;
      width: 30%;
      height: 47px;
      border: none;
      border-radius: 6px;
      background-color: #76323f;
      color: #cda34f;
      font-size: 15px;
      font-weight: 600;
      padding: 5px;
      :hover {
        filter: brightness(75%);
        transition: 0.3s;
      }
      :active {
        filter: brightness(1.6);
        transition: 0.3s;
      }
    }
  }
`;

export { Container };
