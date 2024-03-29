import React from 'react';
import styled from 'styled-components';

import { Responsive } from 'styles/Responsive';
import { Color } from 'styles/Color';

import { LanguageSchema } from 'localization';

import { BasicExperience } from './views/BasicExperience';

const Container = styled.div`
  margin: auto;
  margin-bottom: 130px;
  max-width: 350px;
  width: 100%;

  ${Responsive.tablet`
    width: 100%;
    max-width: initial;
  `}
`;

const Title = styled.h2`
  font-size: 1.875em;
  font-weight: 700;
  color: ${Color.MINE_SHAFT};
  margin-bottom: 100px;
  text-align: center;

  ${Responsive.tablet`
    margin-bottom: 80px;
  `}

  ${Responsive.mobile`
    margin-bottom: 60px;
  `}
`;

const SolidEnd = styled.div`
  width: 72px;
  background-color: ${Color.MINE_SHAFT};
  height: 10px;
  margin: auto;
`;

export const Experience: React.FC<LanguageSchema> = ({ content }) => {
  const { name, items } = content.experience;

  const [surveyCake, sparkAmplify, daAiTv, pts] = items;
  return (
    <Container>
      <Title>{name}</Title>
      <BasicExperience data={surveyCake} />
      <BasicExperience data={sparkAmplify} light />
      <BasicExperience data={daAiTv} light />
      <BasicExperience data={pts} light />
      <SolidEnd />
    </Container>
  );
};
