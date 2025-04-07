import { Link } from 'react-router-dom';

import styled, { css } from 'styled-components';

type ButtonProps = {
  isUserId?: boolean;
  isPw?: boolean;
  isVisible?: boolean;
  isConPw?: boolean;
  isSecurity?: boolean;
  isSecurityAvailable?: boolean;
  isEmailAvailable?: boolean;
  isEmail?: boolean;
  isName?: boolean;
  enabled?: boolean;
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
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
  padding: 40px 0 40px;
  gap: 40px;
  overflow-y: auto;
  @media (min-height: 900px) {
    max-height: 100vh;
  }
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
export const FloatingLeftSignupContainer = styled.div.attrs({
  id: 'floatingleftsignupcontainer',
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 40px;
`;
export const FloatingLeftEmailTimer = styled.div.attrs({
  id: 'floatingleftemailtimer',
})<ButtonProps>`
  width: 30px;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  color: white;
  font-family: bold, sans-serif;
  font-size: 12px;
  ${(props) =>
    props.isSecurityAvailable === false &&
    css`
      display: none;
    `}
  border: none;
`;

export const FloatingLeftCheckboxContainer = styled.div.attrs({
  id: 'floatingleftcheckboxcontainer',
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const FloatingLeftCheckAllBox = styled.div.attrs({
  id: 'floatingleftcheckallbox',
})`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
  gap: 5px;
  margin-bottom: 10px;
  &::after {
    content: '';
    position: absolute;
    top: 30px;
    width: 100%;
    height: 1px;
    background-color: #313131;
  }
`;
export const FloatingLeftCheckEachBox = styled.div.attrs({
  id: 'floatingleftcheckeachbox',
})`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
  gap: 5px;
`;
export const FloatingLeftCheckboxText = styled.p.attrs({
  id: 'floatingleftcheckboxtext',
})`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  user-select: none;
  font-family: bold, sans-serif;
  font-size: 12px;
  color: white;
  cursor: pointer;
`;

export const FloatingLeftCheckboxLink = styled(Link).attrs({
  id: 'floatingleftcheckboxlink',
})`
  text-decoration: underline;
  text-underline-offset: 3px;
  color: white;
  font-family: 'bold', sans-serif;
  display: inline;
  position: relative;
  margin-right: 4px;
  background-color: transparent;
`;

export const FloatingLeftLoginArea = styled.div.attrs({
  id: 'floatingleftloginarea',
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const FloatingLeftLoginLeftText = styled.div.attrs({
  id: 'floatingleftloginlefttext',
})`
  color: white;
  font-family: regular, sans-serif;
  font-size: 12px;
`;

export const FloatingLeftLoginRightText = styled.div.attrs({
  id: 'floatingleftloginrighttext',
})`
  color: var(--devolt-purple);
  font-family: extrabold, sans-serif;
  font-size: 12px;
  cursor: pointer;
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

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: transparent;
`;
