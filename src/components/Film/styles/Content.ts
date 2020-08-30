import styled from 'styled-components';
import { rgba } from 'polished';

import { Color } from 'styles/Color';

export const InnerContent = styled.div`
  max-width: 1280px;
  padding: 70px 30px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

export const Information = styled.div`
  max-width: 800px;
  width: 100%;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: ${Color.WHITE};
  line-height: 1.8;
  margin-bottom: 40px;
`;

export const CrewWrapper = styled.section`
  max-width: 600px;
  width: 100%;
  line-height: 1.5;
  color: ${Color.WHITE};

  time {
    font-size: 0.75rem;
    line-height: 1.5;
    margin-bottom: 10px;
    display: block;
  }
`;

export const CrewColumn = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export const CrewList = styled.dl`
  &:not(:last-of-type) {
    margin-right: 40px;
  }
`;

export const Play = styled.a`
  text-decoration: underline;
  color: ${Color.WHITE}!important;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    color: ${rgba(Color.WHITE, 0.5)}!important;
  }
`;

export const ScreenContainer = styled.div`
  margin: 50px 0;
`;

export const ScreenImage = styled.picture`
  img {
    max-width: 390px;
    height: 260px;
    object-fit: cover;
    width: 100%;
  }
`;

export const CrewRotate = styled.section`
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const FirstImageRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  picture + picture {
    margin-left: 20px;
  }
`;

export const SecondImageRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;
