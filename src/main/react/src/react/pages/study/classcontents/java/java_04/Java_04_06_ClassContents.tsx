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
  ClassContentsImage,
} from '../../../../../styles/study/Study_Class';
import 'highlight.js/styles/a11y-dark.css';

const Java_04_06_ClassContents = (): JSX.Element => {
  const Java_04_06_Code01 = (): JSX.Element => {
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
1. println()
2. println(boolean x)
3. println(char x)
4. println(char[] x)
5. println(double x)
6. println(float x)
7. println(int x)
8. println(long x)
9. println(Object x)
10. println(String x)
          `}
        </code>
      </pre>
    );
  };

  const Java_04_06_Code02 = (): JSX.Element => {
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
    public static void main(String[]args) {
        System.out.printf("%d\n", sum(10, 20, 30));
        System.out.printf("%.2f\n", sum(10.22, 20.33, 30.44));
        System.out.printf("%s\n", sum("Korea", "Seoul", "Gang-nam"));
        System.out.printf("%d\n", sum(10, 'A', 'B'));
    }

    static int sum(int x, int y, int z) {
        return x + y + z;
    }
    static double sum(double x, double y, double z) {
        return x + y + z;
    }
    static String sum(String x, String y, String z) {
        return x + y + z;
    }
		static int sum(int x, String y. int z) {
				if(e.equals("100)) return x + 100 + z;
				else return 0;
		}
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
          <ClassHeaderTitle>Method Overloading</ClassHeaderTitle>
        </ClassHeader>
        <ClassContentsContainer>
          <ClassContentsTitle2>메소드 오버로딩(method overloading)</ClassContentsTitle2>
          <ClassContentsText>
            <b>메소드 오버로딩이란 같은 이름의 메소드를 중복하여 정의하는 것을 의미</b>
            합니다.
            <br />
            원래 한 클래스내에 같은 이름의 메소드를 둘 이상 가질 수 없으나 매개변수의 개수나 타입을
            다르게 하면, 하나의 이름으로 메소드를 작성 할 수 있습니다.
            <br />
            메소드 오버로딩은 객체지향 프로그래밍의 특징 중 하나인 다형성(polymorphism)을 구현하는
            방법 중 하나 입니다.
            <br />
            메소드 오버로딩의 대표적인 예로는 println() 메소드를 들 수 있습니다.
            <Java_04_06_Code01 />
          </ClassContentsText>
          <ClassContentsTitle3>메소드 오버로딩의 조건</ClassContentsTitle3>
          <ClassContentsText>
            1. 메소드의 이름이 같아야 합니다.
            <br />
            2. 매개변수의 개수 또는 타입이 달라야 합니다. (매개변수는 같은데 반환 타입이 다른 경우는
            오버로딩이 성립하지 않습니다.)
            <ClassContentsImage
              style={{
                width: '100%',
                height: '200px',
                backgroundImage: `url(${'/images/study/java/java_04_06_01.png'})`,
              }}
            />
            <Java_04_06_Code02 />
          </ClassContentsText>
        </ClassContentsContainer>
      </EachClass>
    </>
  );
};

export default Java_04_06_ClassContents;
