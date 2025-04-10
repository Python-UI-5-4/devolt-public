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

const Java_04_23_ClassContents = (): JSX.Element => {
  const Java_04_23_Code01 = (): JSX.Element => {
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
// 외부 클래스
public class OuterClass {

    // 정적 중첩 클래스
    public static class NestedStaticClass {
        // 정적 중첩 클래스의 메서드
        public void display() {
            System.out.println("This is a message from the static nested class.");
        }
    }

    // 외부 클래스의 메서드
    public void outerMethod() {
        System.out.println("This is a message from the outer class.");
    }
}

public class Main {
    public static void main(String[] args) {
        // 외부 클래스의 인스턴스 생성 없이 정적 중첩 클래스 사용 가능
        OuterClass.NestedStaticClass nested = new OuterClass.NestedStaticClass();
        nested.display();

        // 외부 클래스의 인스턴스 생성 후 메서드 호출
        OuterClass outer = new OuterClass();
        outer.outerMethod();
    }
}

          `}
        </code>
      </pre>
    );
  };

  const Java_04_23_Code02 = (): JSX.Element => {
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
public class OutClass {
    private int num = 10;
    private static int sNum = 20;

    private InClass inClass;

    public OutClass() {
        inClass = new InClass();
    }

    class InClass{
        int inNum = 100;
        // static int cInNum = 200; // 인스턴스 내부 클래스에 정적 변수 선언 불가능
        void inTest() {
            System.out.println("외부 클래스의 인스턴스 변수 : " + num);
            System.out.println("외부 클래스의 정벅 변수 : " + sNum);
        }
        // static void sTest() {} // 인스턴스 내부 클래스에 정적 메소드 정의 불가능
    }
    public void usingClass() {
        inClass.inTest();
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_23_Code03 = (): JSX.Element => {
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
    OutClass outClass = new OutClass();
    System.out.println("외부클래스 이용하여 내부 클래스 기능 호출");
    outClass.usingClass(); // 내부 클래스 기능 호출
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_23_Code04 = (): JSX.Element => {
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
public class Button {
    OnClickListener listener; // 생성된 객체의 주소 대입

		// 매개 변수의 다형성으로 외부에서 생성된 객체의 주소를 전달 받음
    void setOnClickListener(OnClickListener listener) {
        this.listener = listener;
    }

    void touch() {
        listener.onClick();  // 구현 객체의 onClick() 메소드 호출
    }
		// 클래스 내부에서 인터페이스를 만듬 (중첩 인터페이스)
    interface OnClickListener {
        void onClick();
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_23_Code05 = (): JSX.Element => {
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
// 구현 클래스
public class CallListener implements Button.OnClickListener {
    @Override
    public void onClick() {
       System.out.println("전화를 겁니다.");
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_23_Code06 = (): JSX.Element => {
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
public class MessageListener implements Button.OnClickListener{
    @Override
    public void onClick() {
        System.out.println("메시지를 보냅니다.");
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_23_Code07 = (): JSX.Element => {
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
public class ButtonEx {
    public static void main(String[]args) {
				// 버튼 이벤트 처리
        Button btn = new Button(); // 하나의 버튼 객체를 생성하고 리스너 등록에 따라사 다른 이벤트 처리
        btn.setOnClickListener(new CallListener());
        btn.touch();
        btn.setOnClickListener(new MessageListener());
        btn.touch();
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
          <ClassHeaderTitle>중첩 클래스와 중첩 인터페이스</ClassHeaderTitle>
        </ClassHeader>
        <ClassContentsContainer>
          <ClassContentsText>
            중첩 클래스란? <b>하나의 클래스 내부에 선언된 또 다른 클래스를 의미</b>
            합니다.
            <br />
            주로 외부 클래스와 긴밀하게 연관된 작업을 수행하기 위해 사용됩니다.{' '}
            <b>
              중첩 클래스는 크게 정적 중첩 클래스(Static Nested Class)와 내부 클래스(Inner Class)
            </b>
            로 나뉩니다.
          </ClassContentsText>
          <br />
          <ClassContentsTitle2>정적 중첩 클래스</ClassContentsTitle2>
          <ClassContentsText>
            - 외부 클래스와의 강한 연관이 필요하지 않을 때 사용. 특히, 외부 클래스의 인스턴스와
            상관없이 동작하는 클래스를 정의할 때 많이 사용
            <br />- 복잡한 클래스 구조에서 외부 클래스와 논리적으로 강하게 묶여 있는 하위 클래스를
            그룹화하는데 유용
            <Java_04_23_Code01 />
          </ClassContentsText>
          <br />
          <ClassContentsTitle2>인스턴스 내부 클래스</ClassContentsTitle2>
          <ClassContentsText>
            인스턴스 내부 클래스는 인스턴스 변수를 선언할 때와 같은 위치에 선언하며, 외부 클래스
            내부에서만 생성하여 사용하는 객체를 선언할 때 씁니다.
            <br />- 외부 클래스의 인스턴스가 생성되어야만 접근할 수 있는 내부 클래스입니다.
            <br />- 외부 클래스의 인스턴스 멤버(필드, 메서드)에 직접적으로 접근할 수 있습니다.
            <br />- 외부 클래스의 멤버와 내부 클래스의 멤버들 간의 서로 private 멤버도 접근이
            가능합니다.
            <br />- 내부 클래스의 인스턴스를 생성할려면 외부 클래스의 인스턴스를 먼저 생성해야
            합니다.
            <Java_04_23_Code02 />
            <Java_04_23_Code03 />
          </ClassContentsText>
          <br />
          <ClassContentsTitle1>중첩 인터페이스</ClassContentsTitle1>
          <ClassContentsText>
            <b>중첩 인터페이스는 클래스 내부에 선언한 인터페이스</b> 입니다.
            <br />
            <b>중첩 인터페이스는 주로 UI 프로그래밍에서 이벤트를 처리할 목적으로 활용</b>
            됩니다.
            <br />
            인터페이스를 클래스 내부에 선언하는 이유는 해당 클래스와 긴밀한 관계를 맺는 구현
            클래스를 만들기 위해서 입니다.
            <br />
            Button을 클릭 했을 때, 이벤트를 처리하는 객체를 받고 싶은 경우, Button 내부에 선언된
            중첩 인터페이스를 구현한 객체만 받아야 한다면 다음과 같이 Button 클래스를 선언하면
            됩니다.
          </ClassContentsText>
          <b>Button.java</b>
          <Java_04_23_Code04 />
          <br />
          <br />
          <b>CallListener.java</b>
          <Java_04_23_Code05 />
          <br />
          <br />
          <b>MessageLisener.java</b>
          <Java_04_23_Code06 />
          <br />
          <br />
          <b>ButtonEx.java</b>
          <Java_04_23_Code07 />
        </ClassContentsContainer>
      </EachClass>
    </>
  );
};

export default Java_04_23_ClassContents;
