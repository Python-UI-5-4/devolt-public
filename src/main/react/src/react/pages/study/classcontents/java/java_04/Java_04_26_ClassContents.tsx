import { JSX, useEffect } from 'react';

import hljs from 'highlight.js';

import {
  EachClass,
  ClassHeader,
  ClassHeaderTitle,
  ClassContentsTitle1,
  ClassContentsText,
  ClassContentsContainer,
  ClassContentsTitle2,
} from '../../../../../styles/study/Study_Class';
import 'highlight.js/styles/a11y-dark.css';

const Java_04_26_ClassContents = (): JSX.Element => {
  const Java_04_26_Code01 = (): JSX.Element => {
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
package com.ennonalabs.bigdata;

public class MyClass {
    public static void main(String[]args) {

    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_26_Code02 = (): JSX.Element => {
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
import 상위패키지.하위패키지.클래스이름;
import 상위패키지.하위패키지.*;
          `}
        </code>
      </pre>
    );
  };

  const Java_04_26_Code03 = (): JSX.Element => {
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
package com.megastudy;
import com.megastudy.utli.*;

public class MyClass {
    public static void main(String[]args) {
        Util util = new Util();
        System.out.println(util.add(10,20));
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_26_Code04 = (): JSX.Element => {
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
package com.megastudy.utli;

public class Util {
    public int add(int a, int b) {
        return a + b;
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_26_Code05 = (): JSX.Element => {
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
package com.ennova.mobilepos;
import android.os.Build;
import android.os.Bundle;
import android.view.WindowManager;
          `}
        </code>
      </pre>
    );
  };
  return (
    <>
      <EachClass>
        <ClassHeader>
          <ClassHeaderTitle>Package</ClassHeaderTitle>
        </ClassHeader>
        <ClassContentsContainer>
          <ClassContentsTitle1>패키지(package)?</ClassContentsTitle1>
          <ClassContentsText>
            자바에서 <b>패키지란 클래스와 인터페이스의 집합</b>입니다.
            <br />
            클래스와 인터페이스를 함께 묶음으로 파일을 효율적으로 관리 할 수 있습니다.
            <br />
            협업 시 서로 작업한 클래스 사이에서 발생 할 수 있는 이름의 충돌 문제도 패키지를 사용하면
            피할 수 있습니다.
            <br />- 자바에서 패키지는 <b>물리적으로 하나의 디렉토리를 의미</b>
            합니다.
            <br />- <b>클래스 이름이 동일하더라도 패키지가 다르면 다른 클래스 인식</b>
            합니다.
            <br />- 상위패키지.하위패키지.클래스
            <br />
            자바에서 자주 사용되는 패키지 중 하나인 String 클래스의 패키지 이름은 아래와 같습니다.
            <br />
            <b>java.lang.String (java.lang 패키지에 속한 클래스일을 알 수 있습니다.)</b>
          </ClassContentsText>
          <br />
          <ClassContentsTitle2>패키지의 선언</ClassContentsTitle2>
          <ClassContentsText>
            - 패키지 이름은 관례상 소문자로 작성 합니다.
            <br />- 숫자로 시작하면 안되고 특수문자는 _와 $만 사용 가능 합니다. (한글 가능 합니다.)
            <br />- java로 시작하는 패키지는 자바 표준 API를 의미 하므로 사용해서는 안됩니다.
            <Java_04_26_Code01 />
          </ClassContentsText>
          <br />
          <ClassContentsTitle2>패키지를 사용하는 이유</ClassContentsTitle2>
          <ClassContentsText>
            패키지를 사용하면 비슷한 성격의 클래스들끼리 묶을 수 있어 클래스의 분류가 용이하다.
            그리고 자바코드를 작성하다 보면 다른 사람이 작성한 자바 클래스나 라이브러리를 사용해야
            할 경우도 많이 생기는데 이 때 클래스명이 동일한 경우도 발생할 수 있을 것이다. 하지만{' '}
            <b>패키지명이 다르면 클래스명이 동일해도 충돌없이 사용할 수 있다.</b> 따라서 배포용으로
            작성하는 자바 클래스는 반드시 패키지명을 포함하는 것이 올바른 방법이다.
            <br />
            위에서 언급한 패키지의 장점을 정리해 보았다.
            <br />- 클래스의 분류가 용이하다. (비슷한 것 끼리 묶는다)
            <br />- 패키지가 다르다면 동일한 클래스명을 사용할 수 있다.
          </ClassContentsText>
          <br />
          <ClassContentsTitle2>import 문</ClassContentsTitle2>
          <ClassContentsText>
            사용하고자 하는 클래스 또는 인터페이스가 다른 패키지에 소속되어 있다면, import문으로
            해당 패키지의 클래스 또는 인터페이스를 가져와 사용할 것을 컴파일러에게 알려 줘야 합니다.
            <Java_04_26_Code02 />
            <Java_04_26_Code03 />
            <Java_04_26_Code04 />
            <Java_04_26_Code05 />
          </ClassContentsText>
        </ClassContentsContainer>
      </EachClass>
    </>
  );
};

export default Java_04_26_ClassContents;
