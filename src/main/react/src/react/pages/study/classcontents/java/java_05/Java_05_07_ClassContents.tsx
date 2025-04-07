import { JSX, useEffect } from 'react';

import hljs from 'highlight.js';

import {
  EachClass,
  ClassHeader,
  ClassHeaderTitle,
  ClassContentsText,
  ClassContentsContainer,
  ClassContentsTitle2,
  ClassContentsImage,
  ClassTableBox,
  ClassTable,
  ClassTableTd,
  ClassTableTr,
} from '../../../../../styles/study/Study_Class';
import 'highlight.js/styles/a11y-dark.css';

const Java_05_07_ClassContents = (): JSX.Element => {
  const Java_05_07_Code01 = (): JSX.Element => {
    useEffect(() => {
      const codeBlocks = document.querySelectorAll('pre code');
      codeBlocks.forEach((block) => {
        // Element를 HTMLElement로 타입 단언
        const element = block as HTMLElement;
        // 이미 하이라이팅된 요소인지 확인
        if (!element.dataset.highlighted) {
          hljs.highlightElement(element); // 하이라이팅
          element.dataset.highlighted = 'true'; // 하이라이팅 후 데이터 속성 추가
        }
      });
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
Integer num = new Integer(17); // 박싱
int n = num.intValue();        // 언박싱
System.out.println(n);

Character ch = 'X'; // Character ch = new Character('X'); : 오토박싱
char c = ch;        // char c = ch.charValue();           : 오토언박싱
System.out.println(c);
          `}
        </code>
      </pre>
    );
  };
  return (
    <>
      <EachClass>
        <ClassHeader>
          <ClassHeaderTitle>Wrapper 클래스</ClassHeaderTitle>
        </ClassHeader>
        <ClassContentsContainer>
          <ClassContentsText>
            프로그램에 따라 <b>기본 타입의 데이터를 객체로 취급해야 하는 경우</b>가 있습니다.
            (제네릭, 컬렉션 프레임워크)
            <br />
            예를 들어, 메소드의 인수로 객체 타입만이 요구되면, 기본 타입의 데이터를 그대로 사용할
            수는 없습니다.
            <br />
            이때에는 기본 타입의 데이터를 먼저 객체로 변환한 후 작업을 수행해야 합니다.
            <br />
            이렇게{' '}
            <b>
              8개의 기본 타입에 해당하는 데이터를 객체로 포장해 주는 클래스를 래퍼 클래스(Wrapper
              class)
            </b>
            라고 합니다.
            <br />
            래퍼 클래스는 각각의 타입에 해당하는 데이터를 인수로 전달받아, 해당 값을 가지는 객체로
            만들어 줍니다.
            <br />
            이러한 래퍼 클래스는 모두 java.lang 패키지에 포함되어 제공됩니다.
            <ClassTableBox>
              <ClassTable style={{ textAlign: 'center' }}>
                <thead>
                  <ClassTableTr>
                    <ClassTableTd style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
                      <b>기본 타입</b>
                    </ClassTableTd>
                    <ClassTableTd style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
                      <b>래퍼 클래스</b>
                    </ClassTableTd>
                  </ClassTableTr>
                </thead>
                <tbody>
                  <ClassTableTr>
                    <ClassTableTd>byte</ClassTableTd>
                    <ClassTableTd>Byte</ClassTableTd>
                  </ClassTableTr>
                  <ClassTableTr>
                    <ClassTableTd>short</ClassTableTd>
                    <ClassTableTd>Short</ClassTableTd>
                  </ClassTableTr>
                  <ClassTableTr>
                    <ClassTableTd>int</ClassTableTd>
                    <ClassTableTd>Integer</ClassTableTd>
                  </ClassTableTr>
                  <ClassTableTr>
                    <ClassTableTd>long</ClassTableTd>
                    <ClassTableTd>Long</ClassTableTd>
                  </ClassTableTr>
                  <ClassTableTr>
                    <ClassTableTd>float</ClassTableTd>
                    <ClassTableTd>Float</ClassTableTd>
                  </ClassTableTr>
                  <ClassTableTr>
                    <ClassTableTd>double</ClassTableTd>
                    <ClassTableTd>Double</ClassTableTd>
                  </ClassTableTr>
                  <ClassTableTr>
                    <ClassTableTd>char</ClassTableTd>
                    <ClassTableTd>Character</ClassTableTd>
                  </ClassTableTr>
                  <ClassTableTr>
                    <ClassTableTd>boolean</ClassTableTd>
                    <ClassTableTd>Boolean</ClassTableTd>
                  </ClassTableTr>
                </tbody>
              </ClassTable>
            </ClassTableBox>
          </ClassContentsText>
          <br />
          <ClassContentsTitle2>박싱과 언박싱</ClassContentsTitle2>
          <ClassContentsText>
            래퍼 클래스(Wrapper class)는 산술 연산을 위해 정의된 클래스가 아니므로, 인스턴스에
            저장된 값을 변경할 수 없습니다.
            <br />
            단지, 값을 참조하기 위해 새로운 인스턴스를 생성하고, 생성된 인스턴스의 값만을 참조할 수
            있습니다.
            <ClassContentsImage
              style={{
                width: '100%',
                height: '400px',
                backgroundImage: `url(${'/images/study/java/java_05_07_01.png'})`,
              }}
            />
          </ClassContentsText>
          <br />
          <ClassContentsTitle2>오토 박싱과 오토 언박싱</ClassContentsTitle2>
          <ClassContentsText>
            JDK 1.5부터는 박싱과 언박싱이 필요한 상황에서 자바 컴파일러가 이를 자동으로 처리해
            줍니다.
            <br />
            이렇게 자동화된 박싱과 언박싱을 오토 박싱(AutoBoxing)과 오토 언박싱(AutoUnBoxing)이라고
            부릅니다.
            <Java_05_07_Code01 />
          </ClassContentsText>
        </ClassContentsContainer>
      </EachClass>
    </>
  );
};

export default Java_05_07_ClassContents;
