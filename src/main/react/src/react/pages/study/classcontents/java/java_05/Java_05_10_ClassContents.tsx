import { JSX, useEffect } from 'react';

import hljs from 'highlight.js';

import {
  EachClass,
  ClassHeader,
  ClassHeaderTitle,
  ClassContentsText,
  ClassContentsContainer,
  ClassContentsTitle2,
} from '../../../../../styles/study/Study_Class';
import 'highlight.js/styles/a11y-dark.css';

const Java_05_10_ClassContents = (): JSX.Element => {
  const Java_05_10_Code01 = (): JSX.Element => {
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
public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print("이름을 /기준으로 연속 입력 하세요 : ");
    String names = sc.nextLine();
    StringTokenizer st = new StringTokenizer(names, "/");
    String[] nameStr = new String[st.countTokens()];
    int idx = 0;
    while(st.hasMoreTokens()) {
        nameStr[idx++] = st.nextToken();
    }
    for(int i = 0; i < nameStr.length; i++) {
        System.out.print(nameStr[i] + " ");
    }
    System.out.println();
}
          `}
        </code>
      </pre>
    );
  };

  const Java_05_10_Code02 = (): JSX.Element => {
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
String str = "23:34:45";
String[] time = str.split(":");
for(int i = 0; i < time.length; i++) {
	System.out.println(time[i]);
}
          `}
        </code>
      </pre>
    );
  };

  return (
    <>
      <EachClass>
        <ClassHeader>
          <ClassHeaderTitle>StringTokenizer</ClassHeaderTitle>
        </ClassHeader>
        <ClassContentsContainer>
          <ClassContentsText>
            문자열이 특정 구분자로 연결되어 있는 경우, 구분자를 기준으로 부분 문자열 위해서는
            String의 split()메소드를 이용하거나,
            <b>java.util 패키지</b>의 <b>StringTokenizer 클래스를 이용</b>
            합니다.
          </ClassContentsText>
          <br />
          <ClassContentsTitle2>countTokens()</ClassContentsTitle2>
          <ClassContentsText>꺼내지 않고 남아 있는 토큰의 수</ClassContentsText>
          <ClassContentsTitle2>hasMoreTokens()</ClassContentsTitle2>
          <ClassContentsText>남아 있는 토큰이 있는지 여부</ClassContentsText>
          <ClassContentsTitle2>nextToken()</ClassContentsTitle2>
          <ClassContentsText>
            토큰을 하나씩 꺼내 옴
            <Java_05_10_Code01 />
          </ClassContentsText>
          <ClassContentsTitle2>클래스 split()</ClassContentsTitle2>
          <ClassContentsText>
            - split()은 정규표현식을 사용하고 StringTokenizer() 문자열을 사용
            <br />- 정규표현식이란? 특정한 규칙을 자진 문자열의 집합을 표현하는데 사용하는 형식
            입니다. (패턴 매칭)
            <Java_05_10_Code02 />
          </ClassContentsText>
        </ClassContentsContainer>
      </EachClass>
    </>
  );
};

export default Java_05_10_ClassContents;
