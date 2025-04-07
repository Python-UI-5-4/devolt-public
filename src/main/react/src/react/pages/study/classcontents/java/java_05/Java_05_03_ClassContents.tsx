import { JSX, useEffect } from 'react';

import hljs from 'highlight.js';

import {
  EachClass,
  ClassHeader,
  ClassHeaderTitle,
  ClassContentsText,
  ClassContentsContainer,
  ClassContentsTitle2,
  ClassContentsTitle3,
  ClassContentsCode,
} from '../../../../../styles/study/Study_Class';
import 'highlight.js/styles/a11y-dark.css';

const Java_05_03_ClassContents = (): JSX.Element => {
  const Java_05_03_Code01 = (): JSX.Element => {
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
StringBuffer sb = new StringBuffer();  // StringBuffer 객체 sb 생성
sb.append("hello");
sb.append(" ");
sb.append("jump to java");
System.out.println(sb);
          `}
        </code>
      </pre>
    );
  };

  const Java_05_03_Code02 = (): JSX.Element => {
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
String result = "";
result += "hello";
result += " ";
result += "jump to java";
System.out.println(result);
          `}
        </code>
      </pre>
    );
  };

  const Java_05_03_Code03 = (): JSX.Element => {
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
StringBuilder sb = new StringBuilder();
sb.append("hello");
sb.append(" ");
sb.append("jump to java");
String result = sb.toString();
System.out.println(result);

          `}
        </code>
      </pre>
    );
  };

  const Java_05_03_Code04 = (): JSX.Element => {
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
StringBuffer sb = new StringBuffer();
sb.append("jump to java");
sb.insert(0, "hello ");
System.out.println(sb.toString()); // String 클래스로 반환
          `}
        </code>
      </pre>
    );
  };

  const Java_05_03_Code05 = (): JSX.Element => {
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
StringBuffer sb = new StringBuffer();
sb.append("Hello jump to java");
System.out.println(sb.substring(0, 4));
          `}
        </code>
      </pre>
    );
  };
  return (
    <>
      <EachClass>
        <ClassHeader>
          <ClassHeaderTitle>StringBuffer, StringBuilder</ClassHeaderTitle>
        </ClassHeader>
        <ClassContentsContainer>
          <ClassContentsText>
            문자열을 추가하거나 변경 할 때 사용되는 자료형 입니다.
            <br />
            아래의 내용을 참고로 필요에 따라 String 클래스 또는 StringBuffer, StringBuilder를 사용할
            수 있습니다.
            <Java_05_03_Code01 />
            <br />
            StringBuffer 자료형은 append 메소드를 사용하여 계속해서 문자열을 추가해 나갈 수 있다.
            그리고 위 예제와 같이
            <ClassContentsCode>toString()</ClassContentsCode>메소드를 이용하면 String 자료형으로
            변경할 수 있다.
            <br />
            위의 예제를 String 자료형만으로도 표현 가능 합니다.
            <Java_05_03_Code02 />
            <br />두 개 예제의 결과는 동일하지만 내부적으로 객체가 생성되고 메모리가 사용되는 과정은
            다릅니다.
            <br />
            첫번째 예제의 경우 StringBuffer 객체는 한번만 생성된다. 두번째 예제는 String 자료형에
            <ClassContentsCode>+</ClassContentsCode> 연산이 있을 때마다 새로운 String 객체가
            생성된다(문자열 간<ClassContentsCode>+</ClassContentsCode> 연산이 있는 경우 자바는
            자동으로 새로운 String 객체를 만들어 낸다). 두번째 예제에서는 총 4개의 String 자료형
            객체가 만들어지게 됩니다.
            <br />
            String 자료형은 한번 값이 생성되면 그 값을 변경할 수가 없습니다. 이렇게 값을 변경할 수
            없는 것을 immutable 하다고 한다. trim, toUpperCase 등의 메소드를 보면 문자열이 변경되는
            것 처럼 생각 될 수도 있지만 해당 메소드 수행 시 또 다른 String 객체를 생성하여 리턴할
            뿐이다. 하지만 StringBuffer는 이와 반대로 값을 변경할 수 있다(mutable 하다). 즉 한번
            생성된 값을 언제든지 수정할 수 있습니다.
            <br />
            그렇다면 무조건 StringBuffer를 사용하는 것이 좋을까요?
            <br />
            그건 상황에 따라 다릅니다. StringBuffer 자료형은 String 자료형보다 무거운 편에 속합니다.
            <br />
            <ClassContentsCode>new StringBuffer()</ClassContentsCode>로 객체를 생성하는 것은 일반
            String을 사용하는 것보다 메모리 사용량도 많고 속도도 느리다. 따라서 문자열 추가나
            변경등의 작업이 많을 경우에는 StringBuffer를, 문자열 변경 작업이 거의 없는 경우에는 그냥
            String을 사용하는 것이 유리 합니다.
          </ClassContentsText>
          <br />
          <ClassContentsTitle2>StringBuilder</ClassContentsTitle2>
          <ClassContentsText>
            StringBuffer와 비슷한 자료형으로 StringBuilder가 있다.
            <b>StringBuilder의 사용법은 StringBuffer의 사용법과 동일</b>
            합니다.
            <Java_05_03_Code03 />
            <br />
            <b>
              StringBuffer는 멀티 스레드 환경에서 안전하다는 장점이 있고, StringBuilder는
              StringBuffer보다 성능이 우수한 장점
            </b>
            이 있다. 따라서 동기화를 고려할 필요가 없는 상황에서는 StringBuffer 보다는
            StringBuilder를 사용하는 것이 유리 합니다.
          </ClassContentsText>
          <ClassContentsTitle3>append()</ClassContentsTitle3>
          <ClassContentsText>문자열 추가에 사용 됩니다.</ClassContentsText>
          <ClassContentsTitle3>delete()</ClassContentsTitle3>
          <ClassContentsText>전달된 인덱스에 해당하는 문자열을 제거 합니다.</ClassContentsText>
          <ClassContentsTitle3>insert</ClassContentsTitle3>
          <ClassContentsText>
            insert 메소드는 특정 위치에 원하는 문자열을 삽입할 수 있습니다.
            <Java_05_03_Code04 />
          </ClassContentsText>
          <ClassContentsTitle3>substring</ClassContentsTitle3>
          <ClassContentsText>
            substring 메소드는 String 자료형의 substring 메소드와 동일하게 사용 됩니다.
            <Java_05_03_Code05 />
          </ClassContentsText>
        </ClassContentsContainer>
      </EachClass>
    </>
  );
};

export default Java_05_03_ClassContents;
