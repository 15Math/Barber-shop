import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 17rem;
  width: 100%;
  background-color: #683bb7;
  color: #fff;
  margin: 15px;
  font-size: 4em;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    transition: opacity 2s ease-in-out;
  }
`;
