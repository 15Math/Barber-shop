import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 17rem;
  width: 100%;
  color: #fff;
  margin: 15px;
  font-size: 4em;
  border-bottom: 10px solid #2578AC;
  border-right: 10px solid #2578AC;
  border-left: 10px solid #C0382B;
  border-top: 10px solid #C0382B;


  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    transition: opacity 2s ease-in-out;
  }
`;
