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
  padding-bottom: 100px;
`;
export const Container = styled.div.attrs({
  id: 'container',
})`
  max-width: 1280px;
  width: 100%;
  min-height: calc(100vh - 200px);
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 0;
  box-sizing: border-box;
  gap: 50px;
  @media (max-width: 768px) {
    margin-top: 20px;
    gap: 50px;
  }
`;
export const AboutTitleBox = styled.div.attrs({
  id: 'abouttitlebox',
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const AboutTitle = styled.div.attrs({
  id: 'abouttitle',
})`
  width: 100%;
  font-family: heavy, sans-serif;
  font-size: 30px;
  color: var(--devolt-white);
  text-align: center;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
export const AboutHR = styled.hr.attrs({
  id: 'abouthr',
})`
  width: 300px;
  border-color: var(--devolt-purple);
  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const AboutContents = styled.div.attrs({
  id: 'aboutcontents',
})`
  width: 100%;
  font-family: bold, sans-serif;
  font-size: 16px;
  text-align: center;
  color: var(--devolt-white);
  line-height: 24px;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
export const AboutSubContainer = styled.div.attrs({
  id: 'aboutsubcontainer',
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
export const AboutSubTitle = styled.div.attrs({
  id: 'aboutsubtitle',
})`
  width: 100%;

  font-family: 'heavy', sans-serif;
  font-size: 24px;
  text-align: center;
  color: var(--devolt-white);
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const AboutSubContents = styled.div.attrs({
  id: 'aboutsubcontents',
})`
  width: 100%;
  font-family: bold, sans-serif;
  font-size: 16px;
  text-align: left;
  line-height: 24px;
  color: var(--devolt-white);
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

export const AboutListTitle = styled.div.attrs({
  id: 'aboutlisttitle',
})`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 5px;
  padding-right: 20px;
  font-family: 'bold', sans-serif;
  font-size: 20px;
`;
