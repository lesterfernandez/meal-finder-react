import styled from "styled-components";

const Meal = styled.div`
  position: relative;
  outline: 4px solid white;
  cursor: pointer;
  height: 150px;
  width: 150px;

  img {
    width: 150px;
  }

  &:hover {
    button {
      opacity: 1;
    }
  }
  button {
    outline: 0;
    border: 0;
    appearance: none;
    --moz-appearance: none;
    --webkit-appearance: none;
    color: white;
    width: 100%;
    cursor: pointer;
    display: flex;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    overflow: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #1117;
    opacity: 0;
    p {
      margin: auto;
    }
  }
  button:focus {
    outline: 0;
  }
`;

export default Meal;
