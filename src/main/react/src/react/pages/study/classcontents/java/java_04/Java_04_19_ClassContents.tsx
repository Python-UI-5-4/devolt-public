import { JSX, useEffect } from 'react';

import hljs from 'highlight.js';

import {
  EachClass,
  ClassHeader,
  ClassHeaderTitle,
  ClassContentsText,
  ClassContentsContainer,
  ClassContentsTitle2,
  ClassContentsCode,
} from '../../../../../styles/study/Study_Class';
import 'highlight.js/styles/a11y-dark.css';

const Java_04_19_ClassContents = (): JSX.Element => {
  const Java_04_19_Code01 = (): JSX.Element => {
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
public class Animal {
    public void move() {
        System.out.println("동물이 움직 입니다.");
    }
}

class Human extends Animal {
    @Override
    public void move() {
        System.out.println("사람은 두 발로 걷습니다.");
    }
    public void readBook() {
        System.out.println("사람이 책을 읽습니다.");
    }
}
class Tiger extends Animal {
    @Override
    public void move() {
        System.out.println("호랑이가 네 발로 뜁니다.");
    }
    public void hunting() {
        System.out.println("호랑이가 사냥을 합니다.");
    }
}
class Eagle extends Animal {
    @Override
    public void move() {
        System.out.println("독수리가 하늘을 납니다.");
    }
    public void flying() {
        System.out.println("독수리가 날개를 쭉 펴고 멀리 날아갑니다.");
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_19_Code02 = (): JSX.Element => {
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
public class DownCasting {
    ArrayList<Animal> aniList = new ArrayList<>();
    public static void main(String[] args) {
        DownCasting downCasting = new DownCasting();
        downCasting.addAnimal();
        System.out.println("원래 형으로 다운 캐스팅");
        downCasting.testCasting();
    }

    public void addAnimal() {
        aniList.add(new Animal()); // ArrayList에 추가되면서 Animal 형으로 변환
        aniList.add(new Tiger());
        aniList.add(new Eagle());

        for(Animal ani : aniList) {
            ani.move();
        }
    }

    public void testCasting() {
        for(int i = 0; i < aniList.size(); i++) {
            Animal ani = aniList.get(i);
            if(ani instanceof Human) {  // Human 형으로 다운캐스팅 가능한지 확인
                Human h = (Human) ani;
                h.readBook();
            } else if(ani instanceof Tiger) {
                Tiger t = (Tiger) ani;
                t.hunting();
            } else if(ani instanceof Eagle) {
                Eagle e = (Eagle) ani;
                e.flying();
            } else {
                System.out.println("지원되지 않는 형 입니다.");
            }
        }
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
          <ClassHeaderTitle>Down Casting & instance of</ClassHeaderTitle>
        </ClassHeader>
        <ClassContentsContainer>
          <ClassContentsTitle2>다운캐스팅</ClassContentsTitle2>
          <ClassContentsText>
            <b>
              상위 클래스형으로 변환 되었던 하위 클래스를 다시 원래 자료형으로 변환는 것을 다운
              캐스팅
            </b>
            이라고 합니다.
            <br />
            즉, 부모 클래스 타입으로 선언된 객체를 하위 클래스 타입으로 형변환하는 것을 말합니다.
            다운 캐스팅은 명시적으로 타입 캐스팅 연산자를 사용해야 합니다. 하지만 이때 주의해야 할
            점은, 실제로 해당 객체가 그 하위 클래스의 인스턴스일 때만 다운 캐스팅이 가능하며, 그렇지
            않을 경우 <ClassContentsCode>ClassCastException</ClassContentsCode>
            예외가 발생할 수 있습니다.
          </ClassContentsText>
          <br />
          <ClassContentsTitle2>instanceof</ClassContentsTitle2>
          <ClassContentsText>
            형 변환 가능 여부를 확인 합니다. (참조 변수가 참조하고 있는 객체(인스턴스)의 실제 타입을
            알아보기 위해 사용)
            <br />
            상속 관계를 생각해 보면 모든 인간은 동물이지만 모든 동물은 인간이 아닙니다.
            <br />
            따라서 다운 캐스팅을 하기 전에 상위 클래스로 형 변환된 인스턴스의 원래 자료형을 확인해야
            변환 할 때 오류를 막을 수 있습니다.
            <Java_04_19_Code01 />
            <Java_04_19_Code02 />
          </ClassContentsText>
        </ClassContentsContainer>
      </EachClass>
    </>
  );
};

export default Java_04_19_ClassContents;
