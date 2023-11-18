import styled from '@emotion/styled';
export const Item = styled.li`
  position: relative;
  width: 300px;
  height: 495px;
  background-color: #1d1d1d;
  border: 1px solid #454545;
  border-radius: 14px;
  overflow: hidden;
  float: left;

  h3 {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 1;
    background-color: rgba(192, 192, 192, 0.5);
    padding: 10px;
    border-radius: 14px;
  }
  img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    height: 300px;
  }
  p:nth-of-type(1) {
    font-size: 22px;
    font-weight: 800;
    line-height: 36px;
    margin-bottom: 6px;
    text-transform: uppercase;
    color: #ffffff;
  }
  p:nth-of-type(2) {
    font-size: 12px;
    font-weight: 300;
    height: 80px;
    line-height: 18px;
    color: #ffffff;
  }
`;

export const WrapperImg = styled.div`
  width: 300px;
  height: 300px;
`;

export const WrapperDescription = styled.div`
  width: 300px;
  height: 122px;
  padding: 32px 32px;
  text-overflow: clip;
  /* white-space: nowrap; */
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;
