import styled, { DefaultTheme } from 'styled-components';

type UserSearchProps = {
  theme?: 'light' | 'dark';
};

export const SearchContainer = styled.div.attrs({
  id: 'searchcontainer',
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--devolt-line);
  border-bottom: 1px solid var(--devolt-line);
`;
export const InputSearchContainer = styled.div.attrs({
  id: 'inputsearchcontainer',
})`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
`;
export const InputSearchBox = styled.div.attrs({
  id: 'inputsearchbox',
})<UserSearchProps>`
  width: calc(100% - 80px);
  height: 40px;
  border-right: 1px solid var(--devolt-line);
  background-position: 20px;
  background-repeat: no-repeat;
  background-size: 15px;
  background-image: ${({ theme }) =>
    `url(${theme === 'light' ? '/images/icon/search_light.png' : '/images/icon/search.png'})`};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const InputSearch = styled.input.attrs({
  id: 'inputsearch',
})`
  background-color: var(--devolt-dark);
  width: 100%;
  height: 100%;
  margin-left: 55px;
  padding-right: 10px;
  border: none;
  font-size: 12px;
  font-family: bold, sans-serif;
  color: var(--devolt-white);
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: var(--devolt-white);
    opacity: 0.5;
    font-size: 12px;
    font-family: bold, sans-serif;
  }
`;
export const InputSearchButton = styled.button.attrs({
  id: 'inputsearchbutton',
})`
  width: 80px;
  color: white;
  background-color: black;
  border: none;
  font-size: 12px;
  font-family: bold, sans-serif;
  cursor: pointer;
  &:hover {
    background-color: var(--devolt-hover);
  }
`;

export const UserListTable = styled.table.attrs({
  id: 'userlisttable',
})`
  width: 100%;
  /* table-layout: fixed; */
  border-collapse: collapse;
  border-bottom: 1px solid var(--devolt-line);
`;

export const UserListTableStyledTH = styled.tr.attrs({
  id: 'userlisttablestyledth',
})`
  height: 40px;
  background-color: var(--devolt-dark);
  color: var(--devolt-white);
  font-family: extrabold, sans-serif;
  font-size: 12px;
  text-align: center;
`;

export const UserListTableStyledTR = styled.tr.attrs({
  id: 'userlisttablestyledtr',
})`
  height: 40px;
  background-color: var(--devolt-hover);
  color: var(--devolt-white);
  font-family: regular, sans-serif;
  font-size: 12px;
  text-align: center;
`;

export const UserListTableStyledTD = styled.td.attrs({
  id: 'userlisttablestyledtd',
})`
  height: 40px;
  color: var(--devolt-white);
  text-align: center;
  padding: 0;
  width: auto;
  border: 1px solid var(--devolt-line);
  border-top: none;
`;

export const UserDeleteContainer = styled.div.attrs({
  id: 'userdeletecontainer',
})`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  border-top: 1px solid var(--devolt-line);
  border-bottom: 1px solid var(--devolt-line);
  margin-bottom: 50px;
`;

export const UserDeleteText = styled.div.attrs({
  id: 'userdeletetext',
})`
  height: 100%;
  color: var(--devolt-white);
  font-family: bold;
  font-size: 12px;
  display: flex;
  align-items: center;
`;

export const UserDeleteButton = styled.button.attrs({
  id: 'userdeletebutton',
})`
  width: 80px;
  height: 100%;
  color: white;
  background-color: var(--devolt-dark);
  border: none;
  font-size: 12px;
  font-family: bold, sans-serif;
  cursor: pointer;
  border-left: 1px solid var(--devolt-line);
  &:hover {
    background-color: var(--devolt-purple);
  }
`;
