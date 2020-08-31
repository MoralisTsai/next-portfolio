import styled from 'styled-components';
import { rgba } from 'polished';

import { Responsive } from 'styles/Responsive';
import { Color } from 'styles/Color';
import { Hover } from 'styles/Hover';

export const InnerContent = styled.div`
  max-width: 1280px;
  padding: 70px 30px;
  margin: auto;
  display: flex;
  justify-content: space-between;

  ${Responsive.laptop`
    flex-flow: column nowrap;
    padding: 50px 70px;
  `}

  ${Responsive.tablet`
    padding: 40px 30px;
  `}


  ${Responsive.mobile`
    padding: 30px 20px;
  `}
`;

export const Information = styled.div`
  max-width: 800px;
  width: 100%;

  ${Responsive.laptop`
    max-width: initial;
  `}
`;

export const Description = styled.p`
  font-size: 1rem;
  color: ${Color.WHITE};
  line-height: 1.8;
  margin-bottom: 40px;

  ${Responsive.mobile`
    line-height: 2;
    margin-bottom: 30px;
  `}
`;

export const CrewWrapper = styled.section`
  max-width: 600px;
  width: 100%;
  line-height: 1.5;
  color: ${Color.WHITE};
  margin-right: 30px;

  time {
    font-size: 0.75rem;
    line-height: 1.5;
    margin-bottom: 10px;
    display: block;
  }

  ${Responsive.laptop`
    margin: 0;
  `}
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

  ${Hover`
    color: ${rgba(Color.WHITE, 0.5)}!important;
  `}

  ${Responsive.tablet`
    display: block;
    margin-bottom: 50px;
  `}
`;

export const ScreenContainer = styled.div`
  margin: 50px 0;

  ${Responsive.tablet`
    margin: 30px 0;
  `}

  ${Responsive.tablet`
    margin: 20px 0;
  `}
`;

export const ScreenImage = styled.picture`
  img {
    max-width: 390px;
    width: 100%;
    height: 260px;
    object-fit: cover;
    width: 100%;
  }

  ${Responsive.laptop`
    &:not(:last-of-type) {
      margin-bottom: 30px;
    }
    img {
      max-width: initial;
      height: 400px;
    }
  `}

  ${Responsive.mobile`
    img {
      max-width: initial;
      height: 200px;
    }
  `}
`;

export const CrewGroup = styled.section`
  display: flex;
  align-items: center;
  overflow: hidden;

  ${Responsive.mobile`
    margin-bottom: 20px;
  `}
`;

export const FirstImageRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  picture + picture {
    margin-left: 20px;
  }

  ${Responsive.laptop`
    flex-flow: column nowrap;
    picture + picture {
      margin: 0;
    }
  `}
`;

export const SecondImageRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;
