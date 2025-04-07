import { createGlobalStyle } from 'styled-components';

import Fonts from './fonts';

interface GlobalStyleProps {
  mode: 'light' | 'dark'; // mode 타입 정의
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  ${Fonts}

  /* 다크 모드 색상 */
  [data-theme="dark"] {
    --devolt-hover: #2e2e2e; /* 다크 모드에서의 hover 색상 */
    --devolt-dark: #1e1e1e;
    --devolt-line: #333333;
    --devolt-purple: #9c27b0;
    --devolt-orange: #FE9226;
    --devolt-yellow: #ffd700;
    --devolt-black: #000000;
    --devolt-white: #ffffff;
    --devolt-blue: #6399ce;
  }

  /* 라이트 모드 색상 */
  [data-theme="light"] {
    --devolt-hover: #e1e1e1; /* 라이트 모드에서의 hover 색상 */
    --devolt-dark: #f1f1f1; /* 라이트 모드에서의 배경색 */
    --devolt-line: #e1e1e1;
    --devolt-purple: #9c27b0;
    --devolt-orange:  #FE9226;
    --devolt-yellow: #ffd700;
    --devolt-black: #ffffff;
    --devolt-white: #000000;
    --devolt-blue: #6399ce;
  }

    /* 적용될 기본 body 스타일 */
  body[data-theme='dark'] {
    background-color: var(--devolt-dark);
    color: var(--devolt-white);
    transition: background-color 0.3s ease, color 0.3s ease;
    font-family: regular;
  }

    /* 라이트 모드 색상 */
  body[data-theme='light'] {
    --devolt-background: var(--devolt-white);
    --devolt-text: black;
  }


  *{
    box-sizing : border-box;
    margin: 0;
    padding: 0;
    /* font-family: regular; */
  }

  h1 {
    font-family: extrabold;
    margin: 1rem 0;
  }

  h2 {
    font-family: extrabold;
    margin: 0.75rem 0;
  }

  h3 {
    font-family: extrabold;
    margin: 0.5rem 0;
  }

  blockquote {
    border-left: 3px solid white;
    margin: 1.5rem 0;
    padding-left: 1rem;
  }

  hr {
    border: none;
    border-top: 1px solid var(--devolt-white);
    margin: 2rem 0;
  }

  p {
    font-family:'regular', sans-serif;
    font-size: 13px;
    line-height: 24px;
  } 

  pre {
  width: 100%;
  background: #2e2b29; /* 기본 배경색 */
  border-radius: 0.5rem; /* 모서리 라운딩 */
  color: white;
  font-family: "JetBrainsMono", monospace; /* 폰트 설정 */
  margin: 1.5rem 0; /* 상하 여백 */
  padding: 0.75rem 1rem; /* 안쪽 여백 */
  overflow-x: auto; /* 코드 줄바꿈 방지 및 스크롤 */
}

/* pre 안의 code 기본 스타일링 */
pre code {
  background: none; /* 중복 배경 제거 */
  color: inherit; /* 상속된 텍스트 색상 */
  font-size: 0.8rem; /* 코드 폰트 크기 */
  padding: 0; /* 중복 padding 제거 */
  line-height: 1.5; /* 가독성을 위한 줄 간격 */
}

/* Lowlight.js의 클래스 스타일 추가 (GitHub 테마 기반) */
.hljs-comment,
.hljs-quote {
  color: #6a737d; /* 주석, 인용문 */
  font-style: italic;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-section {
  color: #d73a49; /* 키워드 */
}

.hljs-string,
.hljs-title,
.hljs-name,
.hljs-variable,
.hljs-template-variable,
.hljs-builtin-name,
.hljs-literal {
  color: #28a745; /* 문자열, 변수 */
}

.hljs-number,
.hljs-symbol,
.hljs-bullet {
  color: #005cc5; /* 숫자, 기호 */
}

.hljs-meta,
.hljs-link {
  color: #d7ff48; /* 메타 정보, 링크 */
}

.hljs-attribute {
  color: #6f42c1; /* 속성 */
}

.hljs-title.class_,
.hljs-type {
  color: #005cc5; /* 클래스, 타입 */
}

.hljs-tag {
  color: #22863a; /* 태그 */
}

.hljs-deletion {
  color: #b31d28; /* 삭제 텍스트 */
  background-color: #ffeef0;
}

.hljs-addition {
  color: #22863a; /* 추가 텍스트 */
  background-color: #f0fff4;
}

.hljs-emphasis {
  font-style: italic; /* 강조 */
}

.hljs-strong {
  font-weight: bold; /* 강한 강조 */
}


  
.fade-enter {
  opacity: 0.2;
  transition: opacity 0.3s ease-in;
}

.fade-enter-active {
  opacity: 1;
}

.css-1rju2q6-MuiButtonBase-root-MuiMenuItem-root.Mui-selected {
  background-color: transparent !important;
}

.css-1rju2q6-MuiButtonBase-root-MuiMenuItem-root.Mui-selected:hover {
  background-color: rgba(0, 0, 0, 0.25) !important;
}

.css-1toxriw-MuiList-root-MuiMenu-list {
  padding-top: 4px !important;
  padding-bottom: 4px !important;
}

.css-rizt0-MuiTypography-root {
  font-family: regular !important;
  font-size: 12px !important;
  text-align: center;
}

.css-1gu340z-MuiChartsAxis-root-MuiChartsXAxis-root .MuiChartsAxis-tick {
  display: none;
}


`;

export default GlobalStyle;
