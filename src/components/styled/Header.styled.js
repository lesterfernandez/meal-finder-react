import styled from "styled-components";

const Header = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  div {
    margin-top: 50px;
    display: flex;
    width: 85%;
    max-width: 600px;
    input {
      flex: 1;
      outline: 0;
      border: 0;
      appearance: none;
      --moz-appearance: none;
      --webkit-appearance: none;
      padding: 10px;
      font-size: 1.1rem;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }

    button {
      cursor: pointer;
      outline: 0;
      border: 0;
      border-left: 1px solid gray;
      appearance: none;
      --moz-appearance: none;
      --webkit-appearance: none;
      padding: 10px 10px;
      font-size: 1.1rem;
      color: #245;
    }

    button:last-of-type {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
      color: #500;
    }

    button:active {
      transform: scale(0.98);
    }
  }
`;

export default Header;
