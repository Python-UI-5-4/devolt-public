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

const Java_05_09_ClassContents = (): JSX.Element => {
  const Java_05_09_Code01 = (): JSX.Element => {
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
public static void main(String[]args) {
    long time = System.currentTimeMillis();
    long timeNano = System.nanoTime();

    System.out.println(time);
    System.out.println(timeNano);
}
          `}
        </code>
      </pre>
    );
  };

  const Java_05_09_Code02 = (): JSX.Element => {
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
public class Main {
    public static void main(String[]args) throws InterruptedException {
       int[] data = new int[1000];
       int cnt = 0, i;
       // 배열내에서 찾고자 하는 임의의 수
       int randVal = (int)(Math.random() * 1000) + 1;
       for(i = 0; i < data.length; i++) {
           data[i] = i + 1;
       }
       long time1 = System.currentTimeMillis();
       // 순차 검색
       for(i = 0; i < data.length; i++) {
           cnt++; // 총 검색 횟수 구하기
           sleep(1);
           if(randVal == data[i]) {
               System.out.println("위치 : " + (i+1));
               break;
           }
       }
       long time2 = System.currentTimeMillis();
       System.out.println("총 검색 횟수 : " + cnt);
       System.out.println("검색에 소요된 시간은 " + (time2 - time1) + "밀리초 입니다.");
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_05_09_Code03 = (): JSX.Element => {
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
System.out.println(System.getProperty("os.name"));
System.out.println(System.getProperty("user.name"));
System.out.println(System.getProperty("os.home"));
          `}
        </code>
      </pre>
    );
  };
  return (
    <>
      <EachClass>
        <ClassHeader>
          <ClassHeaderTitle>System 클래스</ClassHeaderTitle>
        </ClassHeader>
        <ClassContentsContainer>
          <ClassContentsTitle2>프로그램 종료(exit())</ClassContentsTitle2>
          <ClassContentsText>
            프로그램을 강제 종료 시킴
            <br />
            <ClassContentsCode>System.exit()</ClassContentsCode>
          </ClassContentsText>
          <ClassContentsTitle2>쓰레기 수집기 실행</ClassContentsTitle2>
          <ClassContentsText>
            <ClassContentsCode>System.gc()</ClassContentsCode>
          </ClassContentsText>
          <ClassContentsTitle2>현재 시간 읽기</ClassContentsTitle2>
          <ClassContentsText>
            - 주로 실행 시간을 측정하는 용도로 사용 됩니다.
            <br />- currentTimeMillis() : UTC 1970년 1월 1일 00:00:00.000을 기준으로 현재 시간의
            차이를 반환(1/1000초 단위)
            <br />- nanoTime() : 10억분의 1초를 의미 함(1/100,000,000)
            <Java_05_09_Code01 />
            <Java_05_09_Code02 />
          </ClassContentsText>
          <ClassContentsTitle3>
            <b style={{ color: 'var(--devolt-white)' }}>시스템 프로퍼티 읽기</b>
          </ClassContentsTitle3>
          <Java_05_09_Code03 />
        </ClassContentsContainer>
      </EachClass>
    </>
  );
};

export default Java_05_09_ClassContents;
