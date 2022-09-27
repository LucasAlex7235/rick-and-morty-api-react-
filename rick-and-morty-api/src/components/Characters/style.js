import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  max-width: 1272px;

  padding: 20px;
  height: 100vh;

  h3 {
    text-align: center;
    margin: 20px auto;
    animation: fontScale 1.6s ease-in-out infinite;
  }

  @keyframes fontScale {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;
