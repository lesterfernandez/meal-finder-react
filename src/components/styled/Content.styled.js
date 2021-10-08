import styled from "styled-components";

const Content = styled.div`
  img {
    width: 150px;
  }

  display: grid;
  width: 90%;
  max-width: 700px;
  grid-template-columns: repeat(auto-fit, 150px);
  grid-gap: 2rem;
`;

export default Content;
