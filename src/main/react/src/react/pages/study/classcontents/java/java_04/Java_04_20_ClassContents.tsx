import { JSX, useEffect } from 'react';

import hljs from 'highlight.js';

import {
  EachClass,
  ClassHeader,
  ClassHeaderTitle,
  ClassContentsText,
  ClassContentsContainer,
  ClassContentsImage,
} from '../../../../../styles/study/Study_Class';
import 'highlight.js/styles/a11y-dark.css';

const Java_04_20_ClassContents = (): JSX.Element => {
  const Java_04_20_Code01 = (): JSX.Element => {
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
        System.out.print("입력 인원 : ");
        int cnt = sc.nextInt();
        NameCard[] nameCards = new NameCard[cnt]; // 객체를 저장 할 배열 생성

        System.out.println("정보 입력");
        System.out.println("----------------------");
        for(int i = 0; i < nameCards.length; i++) {
            nameCards[i] = new NameCard();
            System.out.print("이름 : ");
            nameCards[i].setName(sc.next());
            System.out.print("나이 : ");
            nameCards[i].setAge(sc.nextInt());
            System.out.print("이메일 : ");
            nameCards[i].setMail(sc.next());
            System.out.print("연락처 : ");
            nameCards[i].setPhoneNumber(sc.next());
        }
        for(NameCard e : nameCards) i.printInfo();
    }
          `}
        </code>
      </pre>
    );
  };

  const Java_04_20_Code02 = (): JSX.Element => {
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
public class NameCard {
    private String name;
    private String mail;
    private String phoneNumber;
    private int age;
    public void setName(String name) {
        this.name = name;
    }
    public void setAge(int age) {
        this.age = age;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void printInfo() {
        System.out.println("이름 : " + name);
        System.out.println("나이 : " + age);
        System.out.println("연락처 : " + phoneNumber);
        System.out.println("메일 : " + mail);
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
          <ClassHeaderTitle>객체를 배열로 관리하기</ClassHeaderTitle>
        </ClassHeader>
        <ClassContentsContainer>
          <ClassContentsText>
            객체도 배열로 만들어 관리 할 수 있습니다.
            <br />
            <b>객체를 배열로 관리하기 위해서 먼저 객체를 저장할 배열을 생성</b>
            합니다.
            <br />
            <b>
              객체를 배열에 저장하기 위해서 배열을 순회하면서 배열을 저장하기위해 객체를 생성하고
              객체의 세터를 이용하여 값을 저장
            </b>
            합니다.
            <ClassContentsImage
              style={{
                width: '100%',
                height: '200px',
                backgroundImage: `url(${'/images/study/java/java_04_20_01.png'})`,
              }}
            />
            <Java_04_20_Code01 />
            <Java_04_20_Code02 />
          </ClassContentsText>
        </ClassContentsContainer>
      </EachClass>
    </>
  );
};

export default Java_04_20_ClassContents;
