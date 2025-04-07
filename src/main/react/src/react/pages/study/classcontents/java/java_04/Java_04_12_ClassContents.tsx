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

const Java_04_12_ClassContents = (): JSX.Element => {
  const Java_04_12_Code01 = (): JSX.Element => {
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
    public static void main(String[] args) {
        Bank kakao = new Bank("카카오", 1000);
        Bank shinhan = new Bank("신한", 1000);
        kakao.viewAccount();
        System.out.println(Bank.getCount());
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_12_Code02 = (): JSX.Element => {
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
package 정적메소드;

public class Bank {
    private static int count = 0; // 정적 멤버
    private int account;
    private String bank;
    Bank(String name, int account) {
        count++;
        this.bank = name;
        this.account = account;
        System.out.println(name + "은행에 계좌 개설 합니다. 잔액은 " + account + "입니다");
    }

    public static int getCount() { // 정적 메소드
        return count;
    }

    public void setDeposit(final int dep) {
        this.account += dep;
        System.out.println(dep + "을 예금 했습니다.");
    }
    public void setWithdraw(final int with) {
        if(with > account) {
            System.out.println("잔액이 부족 합니다.");
        } else {
            account -= with;
        }
    }
    public void viewAccount() {
        System.out.println("현재 잔액은 " + account + "입니다.");
    }

}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_12_Code03 = (): JSX.Element => {
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
import java.text.SimpleDateFormat;
import java.util.Date;

class Util {
    public static String getCurrentDate(String fmt) {
        SimpleDateFormat sdf = new SimpleDateFormat(fmt);
        return sdf.format(new Date());
    }
}

public class Sample {
    public static void main(String[] args) {
        System.out.println(Util.getCurrentDate("yyyyMMdd"));  // 오늘 날짜 출력
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_12_Code04 = (): JSX.Element => {
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
public class DefineVal {
	static final DOMAIN = "192.168.30.43";
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
          <ClassHeaderTitle>정적 멤버 & Method</ClassHeaderTitle>
        </ClassHeader>
        <ClassContentsContainer>
          <ClassContentsText>
            <b>
              static은 고정된 의미를 가지고 있으며, 정적 멤버는 클래스에 고정된 멤버로서 객체를
              생성하지 않고 사용 할수 있는 필드와 메소드를 의미 합니다.{' '}
            </b>
          </ClassContentsText>
          <br />
          <ClassContentsTitle2>정적 메소드 사용</ClassContentsTitle2>
          <ClassContentsText>
            정적 메소드 내부에서는 인스턴스 필드나 인스턴스 매소드를 사용 할 수 없습니다.
            <br />
            static 변수와 메소드는 클래스를 통해 호출 됩니다.
            <Java_04_12_Code01 />
          </ClassContentsText>
          <br />
          <ClassContentsTitle3>Bank Class 만들기</ClassContentsTitle3>
          <ClassContentsText>
            -{' '}
            <b style={{ color: 'var(--devolt-blue)' }}>
              <i>private static int count</i>
            </b>
            는 Bank Class가 몇번 생성되었는지를 누적하는 <b>정적멤버(클래스 필드)</b> 입니다.
            <br />-{' '}
            <b style={{ color: 'var(--devolt-blue)' }}>
              <i>public static int getCount()</i>
            </b>
            는 정적 메소드이며 정적멤버에 대한 게터 입니다.
            <br />- 매개변수에 사용된 final은 전달 받은 매개변수가 변경되는 것을 방지하기 위해 사용
            됩니다.
            <Java_04_12_Code02 />
          </ClassContentsText>
          <br />
          <ClassContentsTitle2>사용 예</ClassContentsTitle2>
          <ClassContentsTitle3>자주 사용하는 유틸리티 작성</ClassContentsTitle3>
          <ClassContentsText>
            <b>static 메소드는 유틸리티성 메소드 작성할 때 자주 사용</b>
            됩니다.
            <Java_04_12_Code03 />
          </ClassContentsText>
          <ClassContentsTitle3>final 필드와 상수</ClassContentsTitle3>
          <ClassContentsText>
            final 선언 시 값을 단 한번만 대입할 수 있도 이후로는 변경 할 수 없는 상수의 특성을
            가집니다.
            <br />
            하지만, 자바에서는 final 선언으로만 상수로 부르지 않습니다.
            <br />
            왜냐면 변하지 않는 불변의 값은 객체마다 저장 할 필요가 없기 때문에 단 한번만 생성되어야
            하기 때문입니다.
            <br />
            그러므로, <ClassContentsCode>static final 데이터 타입 상수명;</ClassContentsCode>{' '}
            선언되어야 합니다.
            <Java_04_12_Code04 />
          </ClassContentsText>
        </ClassContentsContainer>
      </EachClass>
    </>
  );
};

export default Java_04_12_ClassContents;
