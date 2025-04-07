import styled from 'styled-components';

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
  @media (max-width: 768px) {
    max-width: 768px;
  }
`;

export const LeftContainer = styled.div.attrs({
  id: 'leftcontainer',
})`
  width: 40%;
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
  display: flex;
  flex-direction: column;
  border-left: 1px solid var(--devolt-line);
  padding-bottom: 100px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 100%;
    border-left: none;
  }
`;

export const ImageBox = styled.img.attrs({
  id: 'imagebox',
})`
  padding: 40px 10px 0;
  width: 100%; /* div의 width에 맞게 */
  height: auto; /* 비율에 맞게 자동으로 조정 */
  object-fit: contain; /* 이미지의 비율을 유지하면서 크기 조정 */
`;

export const MenuListContainer = styled.div.attrs({
  id: 'menulistcontainer',
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-left: 15px;
`;
export const MenuListTitle = styled.div.attrs({
  id: 'menulisttitle',
})`
  width: 100%;
  font-family: 'bold', sans-serif;
  font-size: 24px;
  color: var(--devolt-black);
  display: flex;
  position: relative;
  margin-bottom: 10px;
`;
export const MenuListLink = styled.button.attrs({
  id: 'menulistlink',
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
export const MenuListActiveContents = styled.div.attrs({
  id: 'menulistactivecontents',
})`
  width: 100%;
  font-family: 'semibold', sans-serif;
  font-size: 18px;
  color: black;
  display: flex;
  position: relative;
`;
export const MenuListInactiveContents = styled.div.attrs({
  id: 'menulistactivecontents',
})`
  width: 100%;
  font-family: 'regular', sans-serif;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.4);
  display: flex;
  position: relative;
`;

export const ChapterOuter = styled.div.attrs({
  id: 'chapterouter',
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow-x: hidden;
  border-bottom: 1px solid var(--devolt-line);
`;
export const ChapterListTitle = styled.div.attrs({
  id: 'chapterlisttitle',
})`
  width: 100%;
  background-color: black;
  height: 40px;
  font-family: extrabold, sans-serif;
  font-size: 14px;
  color: white;
  display: flex;
  align-items: center;
  padding-left: 15px;
`;
export const ChapterInner = styled.div.attrs({
  id: 'chapterinner',
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--devolt-dark);
`;

export const ChapterName = styled.div.attrs({
  id: 'ChapterName',
})`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: left;
  align-items: center;
  color: white;
  font-size: 14px;
  font-family: bold, sans-serif;
  cursor: pointer;
  position: relative;
  padding-left: 15px;
  &:hover {
    background-color: var(--devolt-hover);
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
