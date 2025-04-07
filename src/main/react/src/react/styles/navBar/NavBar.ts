import { Link } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';
import styled, { css } from 'styled-components';

import { CssProps } from '../../pages/navBar/BarType';

export const Wrap = styled.div.attrs({
  id: 'wrap',
})`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: center;
  border-top: 1px solid var(--devolt-line);
  border-bottom: 1px solid var(--devolt-line);
  background-color: var(--devolt-dark);
  position: absolute;
  z-index: 10000;
`;

export const Container = styled.div.attrs({
  id: 'container',
})`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  z-index: 10000;
  @media (max-width: 768px) {
    max-width: 768px;
  }
`;

export const LogoContainer = styled.div.attrs({
  id: 'logocontainer',
})`
  margin-left: 10px;
  width: 186px;
  height: 100%;
  display: flex;
  flex-direction: row;
  /* background-color: var(--devolt-white); */
  position: relative;
  align-items: center;
`;
export const Logo = styled.div.attrs({
  id: 'logo',
})<CssProps>`
  width: 100px;
  height: 25px;
  display: flex;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: ${(props) =>
    props.theme === 'dark'
      ? 'url(/images/logo/fulllogo.png)'
      : 'url(/images/logo/fulllogo_light.png)'};
  position: absolute;
  align-items: center;
  justify-content: center;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: transparent;
`;
export const LoginLink = styled.div`
  text-decoration: none;
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: transparent;
  color: var(--devolt-white);
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  &:hover {
    color: var(--devolt-black);
  }
`;
export const MenuContainer = styled.div.attrs({
  id: 'menucontainer',
})`
  width: 750px;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  align-content: center;
  padding-right: 10px;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-end;
  }
`;

export const MobileMenuButton = styled.div.attrs({
  id: 'mobilemenubutton',
})`
  @media (min-width: 769px) {
    display: none;
  }
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: var(--devolt-white);
    padding: 0 0 0 10px;
    transition: transform 0.3s ease;
  }
`;

export const StyledAddIcon = styled(AddIcon)<{ open: boolean }>`
  cursor: pointer;
  will-change: transform;
  transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
`;

export const MenuTitle = styled.div.attrs({
  id: 'menutitle',
})`
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuBox = styled.div.attrs({
  id: 'menubox',
})<CssProps>`
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const MenuButton = styled.button.attrs({
  id: 'menubutton',
})`
  height: 50%;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  user-select: none;
  font-size: 14px;
  font-family: extrabold, sans-serif;
  color: var(--devolt-white);
  &:focus {
    outline: none;
    box-shadow: none;
  }
  &:hover {
    color: var(--devolt-purple);
  }
  transition: all 0.1s ease-in-out;
`;

export const MenuButtonDrop = styled.button.attrs({
  id: 'menubutton',
})<CssProps>`
  height: 50%;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  user-select: none;
  font-size: 14px;
  font-family: extrabold, sans-serif;
  color: var(--devolt-white);
  &:focus {
    outline: none;
    box-shadow: none;
  }
  &:hover {
    color: var(--devolt-purple);
  }
  transition: all 0.1s ease-in-out;

  &::after {
    content: '';
    display: inline-block;
    margin-left: 5px;
    width: 0;
    height: 0;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 6px solid --devolt-white;
    transition: all 0.1s ease-in-out;
  }
  &:hover::after {
    border-top: 6px solid var(--devolt-purple);
  }
`;

export const MenuButtonMyPage = styled.button.attrs({
  id: 'menubutton',
})<CssProps>`
  width: 14px;
  height: 50%;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  user-select: none;
  font-size: 14px;
  font-family: extrabold, sans-serif;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: ${(props) =>
    props.theme === 'dark'
      ? 'url(/images/icon/profile_w.png)'
      : 'url(/images/icon/profile_w_light.png)'};
  color: var(--devolt-white);
  &:focus {
    outline: none;
    box-shadow: none;
  }
  &:hover {
    background-image: url('/images/icon/profile_p.png');
  }
  transition: all 0.1s ease-in-out;
`;

export const LoginContainer = styled.div.attrs({
  id: 'logincontainer',
})`
  width: 100px;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const LoginBox = styled.div.attrs({
  id: 'loginbox',
})<CssProps>`
  width: 100%;
  height: 48px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.isUser &&
    css`
      width: 86px;
      user-select: none;
      border-radius: 30px;
      background-color: : --devolt-white;
      border: 1px solid rgba(0, 0, 0, 0.6);
    `}
  ${(props) =>
    props.isUser === null &&
    css`
      background-color: #313131;
      color: var(--devolt-white);
      border-radius: 10px;
      font-size: 25px;
      font-family: 'cocogoose-md';
      padding-top: 5px;
      cursor: pointer;
      &:hover {
        background-color: var(--devolt-white);
        border: 1px solid #313131;
        color: #313131;
      }
    `}
`;

export const MyPageMenu = styled.div.attrs({
  id: 'mypagemenu',
})<CssProps>`
  width: 200px;
  display: flex;
  position: absolute;
  top: 80px;
  justify-content: center;
  align-items: center;
  background-color: var(--devolt-white);
  box-shadow: 3px 3px 10px 5px rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  right: 0px;
  transition: 0.2s ease-in-out;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 30px;
  ${(props) =>
    props.isToggleMyPage
      ? css`
          width: 200px;
          color: var(--devolt-black);
        `
      : css`
          width: 200px;
          color: transparent;
          display: none;
        `}
`;

export const MyPageMenuContents = styled.div.attrs({
  id: 'mypagemenucontents',
})<CssProps>`
  width: 200px;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  font-family: 'medium', sans-serif;
  gap: 20px;
  ${(props) =>
    props.isToggleMyPage
      ? css`
          color: var(--devolt-black);
        `
      : css`
          color: transparent;
          background-color: transparent;
          display: none;
        `}
  &:first-child {
    font-size: 18px;
  }
  &:nth-child(2) {
    font-family: 'bold', sans-serif;
    font-size: 18px;
    margin-top: 15px;
  }
  &:nth-child(3) {
    justify-content: center;
    font-family: 'cocogoose-md';
    font-size: 20px;
  }
  &:last-child {
    justify-content: center;
    font-family: 'cocogoose-md';
    font-size: 20px;
    cursor: pointer;
  }
  &:nth-child(2)::after,
  &:nth-child(3)::after {
    content: '';
    width: 70%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.2);
    margin-bottom: 15px;
    transform: scaleY(0.5);
  }
`;
export const StyledNavigate = styled.div`
  text-decoration: none;
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  cursor: pointer;
`;
