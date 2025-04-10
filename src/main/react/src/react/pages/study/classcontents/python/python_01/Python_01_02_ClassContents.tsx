import { JSX } from 'react';

import {
  EachClass,
  ClassHeader,
  ClassHeaderTitle,
  ClassContentsText,
  ClassContentsContainer,
  ClassContentsTitle2,
  ClassContentsTitle3,
  ClassContentsTextTab,
  ClassContentsImage,
  ClassLinkBox,
} from '../../../../../styles/study/Study_Class';
import 'highlight.js/styles/a11y-dark.css';

const Python_01_02_ClassContents = (): JSX.Element => {
  return (
    <>
      <EachClass>
        <ClassHeader>
          <ClassHeaderTitle>Python 개발 환경 만들기</ClassHeaderTitle>
        </ClassHeader>
        <ClassContentsContainer>
          <ClassContentsTitle2>아나콘다 설치하기</ClassContentsTitle2>
          <ClassContentsText>
            아나콘다를 쉽게 설명하자면{' '}
            <b>Python의 일반적인 데이터 과학 패키지가 포함된 소프트웨어 패키지</b>
            라고 할 수 있습니다.
          </ClassContentsText>
          <ClassLinkBox to="https://www.anaconda.com/download" target="_blank">
            아나콘다 다운로드
          </ClassLinkBox>

          <ClassContentsImage
            style={{
              backgroundImage: `url(${'/images/study/python/python_01_02_01.png'})`,
              width: '100%',
            }}
          />
          <ClassContentsTitle2>파이참(Community Edition) 설치</ClassContentsTitle2>
          <ClassLinkBox
            to="https://www.jetbrains.com/ko-kr/pycharm/download/?section=windows"
            target="_blank"
          >
            파이참 다운로드
          </ClassLinkBox>
          <br />
          <ClassContentsTitle2>시작하기</ClassContentsTitle2>
          <ClassContentsTitle3>프로젝트 이름, 위치, 인터프리터 지정하기</ClassContentsTitle3>
          <ClassContentsText>
            파이참 설치 완료 후 실행하면 새로운 프로젝트를 생성해야 합니다.
            <br />
            상단 왼쪽의 New Project 선택
            <br />
            <br />
            <ClassContentsImage
              style={{
                backgroundImage: `url(${'/images/study/python/python_01_02_02.png'})`,
                width: '100%',
              }}
            />
            <ClassContentsTextTab>
              - Name에 적절한 프로젝트 이름을 입력합니다.
              <br />
              - Location에 개발을 위한 적절한 위치를 지정합니다. (간단한 개발을 위해서는 기본값을
              유지)
              <br />- Interpreter 타입에서 Python 환경을 사용하기 위해서는 Project venv를 선택하고
              필요시 Python Version을 다운로드 받으면 되고, 위와 같이 아나콘다를 설치한 경우는 Base
              conda를 선택하시면 됩니다.
            </ClassContentsTextTab>
          </ClassContentsText>
          <br />
          <ClassContentsTitle2>파이썬 파일 생성하기</ClassContentsTitle2>
          <ClassContentsText>
            <ClassContentsTextTab>
              - 프로젝트 이름에서 마우스 커서를 올리고 마우스 오른쪽 버튼 클릭 후 아래와 같이 Python
              File을 선택합니다.
              <br />
              <br />
              <ClassContentsImage
                style={{
                  backgroundImage: `url(${'/images/study/python/python_01_02_03.png'})`,
                  width: '100%',
                }}
              />
            </ClassContentsTextTab>
          </ClassContentsText>
          <br />
          <ClassContentsText>
            <ClassContentsTextTab>
              - 아래와 같이 임의의 파일 이름을 입력합니다. (확장자는 자동으로 .py로 지정됩니다.)
              <br />
              <br />
              <ClassContentsImage
                style={{
                  backgroundImage: `url(${'/images/study/python/python_01_02_04.png'})`,
                  width: '100%',
                }}
              />
            </ClassContentsTextTab>
          </ClassContentsText>
          <br />
          <ClassContentsText>
            <ClassContentsTextTab>
              - 아래와 같이 나타납니다.
              <br />
              <br />
              <ClassContentsImage
                style={{
                  backgroundImage: `url(${'/images/study/python/python_01_02_05.png'})`,
                  width: '100%',
                }}
              />
            </ClassContentsTextTab>
          </ClassContentsText>
          <br />
          <ClassContentsText>
            <ClassContentsTextTab>
              - 아래와 같이 창에 글을 입력하고 실행 버튼을 누릅니다. (화면과 같이 Current File로
              지정되어 있지 않은 경우에는 해당 메뉴를 눌러 변경합니다.)
              <br />
              <br />
              <ClassContentsImage
                style={{
                  backgroundImage: `url(${'/images/study/python/python_01_02_06.png'})`,
                  width: '100%',
                }}
              />
            </ClassContentsTextTab>
          </ClassContentsText>
          <br />
          <ClassContentsText>
            <ClassContentsTextTab>
              - 실행 결과 확인
              <br />
              <br />
              <ClassContentsImage
                style={{
                  backgroundImage: `url(${'/images/study/python/python_01_02_07.png'})`,
                  width: '100%',
                }}
              />
            </ClassContentsTextTab>
          </ClassContentsText>
        </ClassContentsContainer>
      </EachClass>
    </>
  );
};

export default Python_01_02_ClassContents;
