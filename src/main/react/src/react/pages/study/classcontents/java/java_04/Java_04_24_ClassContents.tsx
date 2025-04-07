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

const Java_04_24_ClassContents = (): JSX.Element => {
  const Java_04_24_Code01 = (): JSX.Element => {
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
package 템플릿메서드;

public class TemplateMain {
    public static void main(String[] args) {
        Car petrolCar = new PetrolCar();
        System.out.println("휘발유 자동차 운전 시작 : ");
        petrolCar.drive();
        System.out.println();
    }
}

// 추상 클래스 Car: 템플릿 메서드를 제공하는 자동차 클래스
abstract class Car {
    // 템플릿 메서드: 자동차 운전 흐름을 정의
    public final void drive() {
        startEngine();  // 시동 켜기
        driveCar();     // 운전하기
        stopEngine();   // 시동 끄기
    }

    // 추상 메서드들: 하위 클래스가 각각 구현할 부분
    protected abstract void startEngine();
    protected abstract void driveCar();
    protected abstract void stopEngine();
}

// 휘발유 자동차(PetrolCar) 클래스
class PetrolCar extends Car {
    @Override
    protected void startEngine() {
        System.out.println("휘발유 자동차의 엔진을 시동겁니다.");
    }

    @Override
    protected void driveCar() {
        System.out.println("휘발유 자동차를 운전합니다.");
    }

    @Override
    protected void stopEngine() {
        System.out.println("휘발유 자동차의 엔진을 끕니다.");
    }
}

// 전기 자동차(ElectricCar) 클래스
class ElectricCar extends Car {
    @Override
    protected void startEngine() {
        System.out.println("전기 자동차의 배터리를 활성화합니다.");
    }

    @Override
    protected void driveCar() {
        System.out.println("전기 자동차를 조용하게 운전합니다.");
    }

    @Override
    protected void stopEngine() {
        System.out.println("전기 자동차의 배터리를 끕니다.");
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
          <ClassHeaderTitle>Template Method</ClassHeaderTitle>
        </ClassHeader>
        <ClassContentsContainer>
          <ClassContentsTitle2>템플릿 메서드(Template Method)</ClassContentsTitle2>
          <ClassContentsText>
            - 템플릿 메서드는 상위 클래스에서 <b>알고리즘의 구조를 정의</b>하고, 일부 세부 단계는
            하위 클래스에서 구현하는 디자인 패턴
            <br />
            - 상위 클래스에서 알고리즘의 전체적인 흐름을 정의하고, 하위 클래스가 세부 단계의 구현을
            책임
            <Java_04_24_Code01 />
          </ClassContentsText>
        </ClassContentsContainer>
      </EachClass>
    </>
  );
};

export default Java_04_24_ClassContents;
