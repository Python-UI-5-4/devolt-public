import styled from 'styled-components';

export const CodingTest_QuestInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;

  .challenge-level,
  .challenge-title,
  .challenge-desc,
  .challenge-condition,
  .challenge-limit {
    & > div:first-child {
      color: var(--devolt-white);
      background-color: var(--devolt-black);
      height: 40px;
      border-bottom: 1px solid var(--devolt-line);
      padding: 0 15px;
    }
    & > div:nth-child(2) {
      border-bottom: 1px solid rgba(256, 256, 256, 0.2);
      color: var(--devolt-white);
      padding: 15px 15px;
    }
    & span {
      display: inline-block;
      padding: 10px 0;
      font-family: heavy, sans-serif;
      font-size: 16px;
      white-space: pre-wrap;
    }
    & p {
      font-family: bold, sans-serif;
      font-size: 14px;
    }
  }

  .challenge-io-example {
    & > div:first-child {
      color: var(--devolt-white);
      background-color: var(--devolt-black);
      height: 40px;
      border-bottom: 1px solid var(--devolt-line);
      padding: 0 15px;
      & > span {
        display: inline-block;
        padding: 10px 0;
        font-family: heavy, sans-serif;
        font-size: 16px;
        white-space: pre-wrap;
      }
    }
    & > div:nth-child(2) {
      & table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        border-bottom: 1px solid var(--devolt-line);
      }
      & th,
      & td {
        padding: 6px 15px;
        border-bottom: 1px solid var(--devolt-line);
        text-align: center;
        color: var(--devolt-white);
        font-family: 'regular', sans-serif;
        font-size: 14px;
        background-color: var(--devolt-hover);
      }
      & th:first-child,
      & th:nth-child(2) {
        border-right: 1px solid var(--devolt-line);
      }
      & td:first-child {
        border-right: 1px solid var(--devolt-line);
      }
      & td:first-child {
        border-right: 1px solid var(--devolt-line);
      }
      & th {
        font-family: extrabold, sans-serif;
        font-size: 14px;
        background-color: var(--devolt-dark);
      }
      & td:nth-child(3) {
        border-right: none;
      }
      & td:nth-child(2) {
        border-right: 1px solid var(--devolt-line);
      }
    }
  }
`;
