import { Link } from 'react-router-dom';

import styled, { css, RuleSet } from 'styled-components';

type FindIdProps = {
  isUserIdAvailable?: boolean;
  icon?: string | null;
  isEmail?: boolean;
};

export const Wrap = styled.div.attrs({
  id: 'wrap',
})`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--devolt-purple);
  justify-content: flex-start;
  align-items: center;
`;

export const BodyContainer = styled.div.attrs({
  id: 'bodycontainer',
})`
  width: 100%;
  height: 100%;
  padding-top: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 50px;
  background-color: rgba(0, 0, 0, 0.7);
`;
export const FloatingOuter = styled.div.attrs({
  id: 'floatingouter',
})`
  width: 90%;
  max-width: 900px;
  height: auto;
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 768px) {
    width: 360px;
  }
`;
export const FloatingLeftContainer = styled.div.attrs({
  id: 'floatingleftcontainer',
})`
  width: 360px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
  gap: 50px;
  padding: 60px 0 60px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
    height: 100%;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.8);
    border-radius: 30px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
  }
`;
export const FloatingLeftLogoContainer = styled.div.attrs({
  id: 'floatingleftlogocontainer',
})`
  width: 200px;
  height: 50px;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
`;
export const FloatingLeftLogo = styled.div.attrs({
  id: 'floatinglogo',
})`
  width: 200px;
  height: 50px;
  display: flex;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(/images/logo/fulllogo_white.png);
  position: relative;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const FloatingLeftFindContainer = styled.div.attrs({
  id: 'floatingleftfindcontainer',
})<FindIdProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 40px;
`;

export const FloatingLeftOutputContainer = styled.div.attrs({
  id: 'floatingleftoutputcontainer',
})<FindIdProps>`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: all 0.3s ease-in-out;
  gap: 20px;
  padding: 0 0 40px;
`;

export const FloatingLeftOutputText = styled.div.attrs({
  id: 'floatingleftoutputtext',
})`
  color: white;
  font-size: 20px;
  font-family: 'bold', sans-serif;
  line-height: 30px;
  text-align: center;
  display: inline-block;
`;

export const FloatingLeftOutputTextBold = styled.div.attrs({
  id: 'floatingleftoutputtextbold',
})`
  display: inline-block;
  color: white;
  font-size: 20px;
  font-family: 'heavy', sans-serif;
  color: var(--devolt-purple);
  border-radius: 30px;
`;

export const FloatingRightContainer = styled.div.attrs({
  id: 'floatingrightcontainer',
})`
  width: calc(100% - 360px);
  height: auto;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: left;
  padding: 0 70px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const FloatingRightTitle = styled.div.attrs({
  id: 'floatingrighttitle',
})`
  color: white;
  font-family: heavy, sans-serif;
  font-size: 40px;
  line-height: 140%;
  white-space: normal;
  word-wrap: break-word;
`;

export const FloatingRightText = styled.div.attrs({
  id: 'floatingrighttext',
})`
  color: white;
  font-family: regular, sans-serif;
  font-size: 14px;
  line-height: 160%;
  white-space: normal;
  word-wrap: break-word;
`;
export const BottomNoticeContainer = styled.div.attrs({
  id: 'bottomnoticecontainer',
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: absolute;
  justify-content: center;
  align-items: center;
  color: var(--devolt-white);
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const BottomNoticeText = styled.div.attrs({
  id: 'bottomnoticetext',
})`
  width: 150px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 12px;
  font-family: bold, sans-serif;
  user-select: none;
  cursor: pointer;
  & + &::before {
    content: '';
    position: absolute;
    left: -7px;
    bottom: 5px;
    width: 10px;
    height: 1px;
    background-color: #dadcdf;
    transform: rotate(90deg);
  }
`;
