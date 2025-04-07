import styled from 'styled-components';

type StudyComponentsProps = {
  isOpen?: boolean;
};

export const SubjectContainer = styled.div.attrs({
  id: 'subjectcontainer',
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: var(--devolt-dark);
  position: relative;
  border-bottom: 1px solid var(--devolt-line);
  padding: 10px 20px 20px;
  cursor: pointer;
`;

export const SubjectImgContainer = styled.div.attrs({
  id: 'subjectimgcontainer',
})`
  width: 20%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const SubjectTextContainer = styled.div.attrs({
  id: 'subjecttextcontainer',
})`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const SubjectTitle = styled.div.attrs({
  id: 'subjecttitle',
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
export const SubjectContents = styled.div.attrs({
  id: 'subjectcontents',
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
export const SubjectRateContainer = styled.div.attrs({
  id: 'subjectratecontainer',
})`
  width: 100%;
  height: 33px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const SubjectRateContents = styled.div.attrs({
  id: 'subjectratecontents',
})`
  width: 100%;
  font-family: 'regular', sans-serif;
  font-size: 10px;
  color: var(--devolt-white);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EachClass = styled.div.attrs({
  id: 'eachclass',
})`
  width: 100%;
  background-color: var(--devolt-dark);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--devolt-line);
`;

export const ClassHeader = styled.div.attrs({
  id: 'classheader',
})<StudyComponentsProps>`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => (props.isOpen ? '#1e1e1e' : 'black')};
  transition:
    border-radius 1s ease-in-out,
    background-color 1s ease-in-out;
`;

export const ClassHeaderTitle = styled.div.attrs({
  id: 'classheadertitle',
})`
  width: 90%;
  padding-left: 15px;
  color: white;
  font-size: 14px;
  font-family: extrabold, sans-serif;
`;

export const ClassHeaderTitleButton = styled.div.attrs({
  id: 'classheadertitlebutton',
})<StudyComponentsProps>`
  width: 30px;
  height: 30px;
  margin-top: 8px;
  position: relative;
  margin-right: 30px;
  color: var(--devolt-white);
  cursor: pointer;
  &::before {
    /* 토글 상태에 따라 아이콘 변경 */
    content: '';
    position: absolute;
    top: 40%;
    left: 90%;
    transform: translate(-50%, -50%) ${(props) => (props.isOpen ? 'rotate(90deg)' : 'rotate(0deg)')};
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 10px solid white;
    transition: transform 0.3s ease;
  }
`;

export const ClassContents = styled.div.attrs({
  id: 'classcontents',
})<StudyComponentsProps>`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  user-select: none;
  /* 토글 상태에 따라 표시/숨김 */
  display: ${(props) => (props.isOpen ? 'none' : 'block')};
`;

export const ClassSet = styled.div.attrs({
  id: 'classset',
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`;

export const ClassName = styled.div.attrs({
  id: 'classname',
})`
  width: 100%;
  height: 40px;
  font-size: 14px;
  font-family: bold, sans-serif;
  padding-left: 38px;
  text-decoration: none;
  position: relative;
  cursor: pointer;
  background-color: var(--devolt-dark);
  white-space: nowrap; /* 줄바꿈 방지 */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: var(--devolt-white);
  &:hover {
    background-color: var(--devolt-hover);
  }
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
  color: var(--devolt-white);
  font-size: 14px;
  font-family: bold, sans-serif;
  cursor: pointer;
  position: relative;
  padding-left: 15px;
  &:hover {
    background-color: var(--devolt-hover);
  }
`;

export const ArrowContainer = styled.div.attrs({
  id: 'arrowcontainer',
})`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;
