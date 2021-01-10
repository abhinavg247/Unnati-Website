import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 130px;
  border-radius: 12px;
  /* border: 1px solid black; */
  padding: 0.5rem 1rem;
  background-image: linear-gradient(to right, #1e8983, #0dc985);
  margin-right: 20px;
`;
export const CardTitle = styled.div`
  height: 75%;
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
`;
export const LogoWrapper = styled.div`
  height: 100%;
  width: 30%;
  /* border: 1px solid blue; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TitleWrapper = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  display: flex;
  width: 80%;
`;

export const ButtonWrapper = styled.div`
  height: 25%;
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const ExploreButton = styled.div`
  height: 25px;
  width: 100%;
  cursor: pointer;
  /* width: 50%; */
  color: #11bb85;
  background-color: #ffffff;
  border-radius: 10px;
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-color: white; */
`;