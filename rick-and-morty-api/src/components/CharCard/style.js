import styled from "styled-components";

export const UlVitrine = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 500px;
  overflow: auto;
  gap: 20px;

  padding: 30px 20px;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: #bbe0f250;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #00000050;
    border-radius: 20px;
  }

  li {
    width: 100%;
    background-color: #bbe0f2;
    padding-bottom: 18px;
  }

  h4 {
    text-align: center;
    margin: 20px auto;
  }

  figure {
    margin: 0 auto;
    width: 90%;
  }

  img {
    width: 100%;
  }

  @media (min-width: 500px) {
    li {
      width: 200px;
    }
  }
`;
