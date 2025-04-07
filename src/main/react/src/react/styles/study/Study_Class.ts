import { Link } from 'react-router-dom';

import styled from 'styled-components';

type StudyClassProps = {
  rowspan?: string;
  colspan?: string;
  isOpen?: boolean;
};

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
})`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
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
export const ClassHeaderTitlePathLink = styled.button.attrs({
  id: 'classheadertitlepathlink',
})`
  width: inherit;
  height: 30px;
  text-align: left;
  font-size: inherit;
  font-family: inherit;
  text-decoration: none;
  color: inherit;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
`;
export const ClassHeaderTitleButton = styled.div.attrs({
  id: 'classheadertitlebutton',
})<StudyClassProps>`
  width: 30px;
  height: 30px;
  margin-top: 8px;
  position: relative;
  margin-right: 30px;
  color: var(--devolt-white);
  cursor: pointer;
  &::before {
    /* 토글 상태에 따라 아이콘 변경 */
    content: ${(props) => (props.isOpen ? '"◀"' : '"▼"')};
    position: relative;
    margin-left: 7px;
  }
`;

export const ClassContentsContainer = styled.div.attrs({
  id: 'classcontentscontainer',
})`
  width: 100%;
  padding: 20px 10px 10px;
  gap: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  pre {
    margin: 5px 0;
  }
`;
export const ClassContentsTitle1 = styled.div.attrs({
  id: 'classcontentstitle1',
})`
  width: 100%;
  font-size: 16px;
  font-family: extrabold, sans-serif;
  color: var(--devolt-white);
`;
export const ClassContentsTitle2 = styled.div.attrs({
  id: 'classcontentstitle2',
})`
  width: 100%;
  font-size: 15px;
  font-family: bold, sans-serif;
  color: var(--devolt-purple);
`;
export const ClassContentsTitle3 = styled.div.attrs({
  id: 'classcontentstitle3',
})`
  width: 100%;
  font-size: 14px;
  font-family: bold, sans-serif;
  color: var(--devolt-orange);
`;
export const ClassContentsText = styled.div.attrs({
  id: 'classcontentstext',
})`
  width: 100%;
  font-size: 12px;
  font-family: regular, sans-serif;
  color: var(--devolt-white);
  line-height: 16px;
`;
export const ClassContentsTextTab = styled.div.attrs({
  id: 'classcontentstexttab',
})`
  padding-left: 10px;
`;
export const ClassContentsImage = styled.div.attrs({
  id: 'classcontentsimage',
})`
  width: 600px;
  height: 200px;
  background-color: white;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top left;
  margin: 10px 0 40px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ClassContentsCodeBox = styled.div.attrs({
  id: 'classcontentscodebox',
})`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  overflow-x: auto;
  padding: 20px 25px;
  font-size: 12px;
  font-family: regular, sans-serif;
  color: var(--devolt-black);
  background-color: var(--devolt-white);
  border-radius: 10px;
  margin: 10px 0 40px;
`;

export const ClassContentsCode = styled.div.attrs({
  id: 'classcontentscode',
})`
  display: inline-block;
  margin: 5px 0;
  padding: 2px 5px;
  border-radius: 5px;
  font-family: 'regular', sans-serif;
  color: red;
  background-color: rgba(0, 0, 0, 0.08);
`;

export const ClassTableBox = styled.div.attrs({
  id: 'classtablebox',
})`
  width: 100%;
  overflow-x: auto;
  font-size: 12px;
  font-family: 'regular', sans-serif;
`;

export const ClassTable = styled.table.attrs({
  id: 'classtable',
})`
  width: 100%;
  border-collapse: collapse;
  border: 1px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ClassTableTr = styled.tr.attrs({
  id: 'classtabletr',
})`
  border: 1px solid var(--devolt-line);
`;

export const ClassTableTd = styled.td.attrs({
  id: 'classtabletd',
})<StudyClassProps>`
  border: 1px solid var(--devolt-line);
  padding: 10px;
`;

export const ClassLinkBox = styled(Link).attrs({
  id: 'classlinkbox',
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  color: var(--devolt-black);
  text-decoration: none;
  border: 1px solid var(--devolt-line);
  border-radius: 10px;
  font-size: 14px;
  font-family: regular, sans-serif;
  background-color: var(--devolt-white);
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  &:hover {
    font-family: 'bold', sans-serif;
    background-color: #313131;
    color: var(--devolt-white);
  }
`;
