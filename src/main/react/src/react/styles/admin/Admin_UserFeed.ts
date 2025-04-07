import styled from 'styled-components';

type UserFeedProps = {
  dangerouslySetInnerHTML?: string;
};

export const RightContainerEach = styled.div.attrs({
  id: 'rightcontainereach',
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--devolt-line);
`;

export const RightFeedContainer = styled.div.attrs({
  id: 'rightfeedcontainer',
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`;
export const RightFeedContentsBox = styled.div.attrs({
  id: 'rightfeedcontentsbox',
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  gap: 20px;
`;
export const RightFeedText = styled.div.attrs({
  id: 'rightfeedtext',
})`
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-family: extrabold, sans-serif;
  color: var(--devolt-white);
`;

export const TipTapBox = styled.div.attrs({
  id: 'tiptapbox',
})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const EditorArea = styled.div.attrs({
  id: 'editorarea',
})`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  border-bottom: 1px solid var(--devolt-line);
  overflow: auto;
`;

export const WriteButtonsArea = styled.div.attrs({
  id: 'writebuttonsarea',
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
export const WriteCancelButton = styled.div.attrs({
  id: 'writecancelbutton',
})`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: rgba(0, 0, 0, 0.8);
  font-size: 12px;
  font-family: bold, sans-serif;
  cursor: pointer;
  border-left: 1px solid var(--devolt-line);
`;

export const WriteSubmitButton = styled.div.attrs({
  id: 'writesutmitbutton',
})`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  color: #f1f1f1;
  font-size: 12px;
  font-family: bold, sans-serif;
  cursor: pointer;
  &:hover {
    background-color: var(--devolt-purple);
  }
`;
