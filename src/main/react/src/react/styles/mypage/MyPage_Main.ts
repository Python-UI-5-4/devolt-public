import styled, { css } from 'styled-components';

type MyPageMainProps = {
  isProfile?: string | null;
};

export const Wrap = styled.div.attrs({
  id: 'wrap',
})`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--devolt-dark);
`;

export const Container = styled.div.attrs({
  id: 'container',
})`
  max-width: 1280px;
  width: 100%;
  min-height: calc(100vh - 200px);
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-left: 1px solid var(--devolt-line);
  border-right: 1px solid var(--devolt-line);
`;

export const LeftContainer = styled.div.attrs({
  id: 'leftcontainer',
})`
  width: 40%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const RightContainer = styled.div.attrs({
  id: 'rightcontainer',
})`
  width: 60%;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  border-left: 1px solid var(--devolt-line);
  padding-bottom: 100px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 100%;
    border-left: none;
    border-right: 1px solid var(--devolt-line);
  }
`;
export const PageTitleBar = styled.div.attrs({
  id: 'pagetitlebar',
})`
  width: 100%;
  height: 40px;
  background-color: var(--devolt-purple);
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 15px;
  font-family: extrabold, sans-serif;
  font-size: 14px;
`;
export const PageSubTitleBar = styled.div.attrs({
  id: 'pagesubtitlebar',
})`
  width: 100%;
  height: 40px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 15px;
  font-family: extrabold, sans-serif;
  font-size: 14px;
`;

export const LeftContainerEach = styled.div.attrs({
  id: 'leftcontainereach',
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--devolt-dark);
  position: relative;
  border-bottom: 1px solid var(--devolt-line);
`;
export const ProfileImage = styled.div.attrs({
  id: 'profileimage',
})<MyPageMainProps>`
  width: 80px;
  height: 80px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  border: 1px solid var(--devolt-line);
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: white;
  ${(props) =>
    props.isProfile === null &&
    css`
      background-image: url('/images/general/default_profile.png');
    `}
  ${(props) =>
    props.isProfile !== null &&
    css`
      background-image: url(${props.isProfile});
    `}
`;
export const UserProfileTextBox = styled.div.attrs({
  id: 'userprofiletextbox',
})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;
export const UserNickName = styled.div.attrs({
  id: 'usernickname',
})`
  width: 100%;
  font-family: extrabold, sans-serif;
  color: var(--devolt-white);
  font-size: 16px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserSignupDate = styled.div.attrs({
  id: 'usersignupdate',
})`
  width: 100%;
  font-family: regular, sans-serif;
  font-size: 14px;
  color: var(--devolt-white);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const LeftContainerTitle = styled.div.attrs({
  id: 'leftcontainertitle',
})`
  width: 100%;
  height: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  align-items: left;
  justify-content: center;
  font-family: extrabold, sans-serif;
  font-size: 14px;
  color: white;
  background-color: black;
`;
export const LeftContainerContentsBox = styled.div.attrs({
  id: 'leftcontainercontentsbox',
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LeftMenuLink = styled.button.attrs({
  id: 'LeftMenuLink',
})`
  font-family: inherit;
  font-size: inherit;
  text-decoration: none;
  border: none;
  color: inherit;
  background-color: transparent;
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
export const LeftContainerContents = styled.div.attrs({
  id: 'leftcontainercontents',
})`
  width: 100%;
  height: 40px;
  background-color: var(--devolt-dark);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-left: 15px;
  justify-content: center;
  font-size: 14px;
  cursor: pointer;
  font-family: bold, sans-serif;
  color: var(--devolt-white);
  &:hover {
    background-color: var(--devolt-hover);
  }
`;
export const LeftContainerContentsInactive = styled.div.attrs({
  id: 'leftcontainercontentsinactive',
})`
  width: 100%;
  height: 40px;
  background-color: var(--devolt-dark);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  cursor: pointer;
  font-family: bold, sans-serif;
  color: var(--devolt-white);
  &:hover {
    background-color: var(--devolt-hover);
  }
`;
export const LeftContainerContentsActive = styled.div.attrs({
  id: 'leftcontainercontentsactive',
})`
  width: 100%;
  height: 40px;
  background-color: var(--devolt-dark);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  cursor: pointer;
  font-family: bold, sans-serif;
  color: var(--devolt-white);
  &:hover {
    background-color: var(--devolt-hover);
  }
`;
