import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div.attrs({
  id: 'header',
})`
  width: 100%;
  height: 50px;
`;

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

export const MainContent = styled.div`
  flex: 1;
  overflow-y: auto;
  scrollbar-gutter: stable;
  &::-webkit-scrollbar {
    width: 10px;
    height: 100%;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--devolt-hover);
    /* border-radius: 30px; */
  }
  &::-webkit-scrollbar-track {
    background: var(--devolt-dark);
  }
`;
