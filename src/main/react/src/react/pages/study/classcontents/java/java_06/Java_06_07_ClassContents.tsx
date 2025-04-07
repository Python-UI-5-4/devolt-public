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

const Java_06_07_ClassContents = (): JSX.Element => {
  const Java_06_07_Code01 = (): JSX.Element => {
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
public class CarComp implements Comparable<CarComp>{
    public String modelName;
    public int modelYear;
    public String color;

    public CarComp(String modelName, int modelYear, String color) {
        this.modelName = modelName;
        this.modelYear = modelYear;
        this.color = color;
    }

    @Override
    public int compareTo(CarComp obj) {
        if(this.modelYear == obj.modelYear) {
           return this.modelName.compareTo(obj.modelName);
        }else if(this.modelYear < obj.modelYear) return -1; // 정렬을 하지 않는 경
        else return 1;
    }
}

package Comparable;
import java.util.Iterator;
import java.util.TreeSet;

public class Main {
    public static void main(String[]args) {
        TreeSet<CarComp> arrList = new TreeSet<>();
        arrList.add(new CarComp("싼타페", 2016, "흰색"));
        arrList.add(new CarComp("쏘렌토", 2012, "은색"));
        arrList.add(new CarComp("그랜저", 2018, "은색"));

        Iterator<CarComp> iterator = arrList.iterator();
        while(iterator.hasNext()) {
            CarComp car = iterator.next();
            System.out.println(car.modelName + ":" + car.modelYear);
        }
				//for(CarComp e : arrList) {
        //    System.out.println(e.modelName + ":" + e.modelYear);
        //}
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_07_Code02 = (): JSX.Element => {
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
        TreeSet<Fruit> treeSet = new TreeSet<>(new DescendingComparator());
        treeSet.add(new Fruit("포도", 3000));
        treeSet.add(new Fruit("수박", 10000));
        treeSet.add(new Fruit("딸기", 6000));
        Iterator<Fruit> iterator = treeSet.iterator();
        while(iterator.hasNext()) {
            Fruit fruit = iterator.next();
            System.out.println(fruit.name + ":" + fruit.price);
        }
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_07_Code03 = (): JSX.Element => {
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
public class Fruit {
    public String name;
    public int price;

    public Fruit(String name, int price) {
        this.name = name;
        this.price = price;
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_07_Code04 = (): JSX.Element => {
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
public class DescendingComparator implements Comparator<Fruit> {
    @Override
    public int compare(Fruit o1, Fruit o2) {
        if(o1.price < o2.price) return 1;
        else if(o1.price == o2.price) return 0;
        return -1;
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
          <ClassHeaderTitle>Comparable & Comparator</ClassHeaderTitle>
        </ClassHeader>
        <ClassContentsContainer>
          <ClassContentsText>
            <b>
              Comparable과 Comparator는 자바에서 객체들을 정렬하는 데 사용되는 인터페이스입니다. 이
              둘은 객체 비교와 정렬에 있어서 서로 다른 접근 방식을 제공합니다.
            </b>
          </ClassContentsText>
          <br />
          <ClassContentsTitle2>{`Comparable<T>인터페이스`}</ClassContentsTitle2>
          <ClassContentsText>
            Comparable인터페이스는 객체를 정렬하는 데 사용되는 메소드인 compareTo()메소드를 정의하고
            있습니다.
            <br />
            <b>
              자바에서 같은 타입의 인스턴스를 서로 비교해야만 하는 클래스들은 모두 Comparable
              인터페이스를 구현
            </b>
            하고 있습니다.
            <br />
            <b style={{ color: 'red' }}>
              <b>자기 자신과 전달받은 매개변수를 비교하는 인터페이스</b>
            </b>
            입니다.
            <Java_06_07_Code01 />
          </ClassContentsText>
          <br />
          <ClassContentsTitle2>{`Comparator<T>인터페이스`}</ClassContentsTitle2>
          <ClassContentsText>
            Comparator 역시 정렬을 구현하는 사용하는 인터페이스 입니다. Comparator 인터페이스는
            compare()메소드를 구현해야 합니다.
            <br />- 두 매개변수를 비교하는 인터페이스 입니다.
            <Java_06_07_Code02 />
            <Java_06_07_Code03 />
            <Java_06_07_Code04 />
          </ClassContentsText>
        </ClassContentsContainer>
      </EachClass>
    </>
  );
};

export default Java_06_07_ClassContents;
