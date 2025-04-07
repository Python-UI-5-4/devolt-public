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

const Java_06_09_ClassContents = (): JSX.Element => {
  const Java_06_09_Code01 = (): JSX.Element => {
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
public interface Collection<E> extends Iterable<E> {}
public interface List<E> extends Collection<E> {}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_09_Code02 = (): JSX.Element => {
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
        List<Integer> list = new LinkedList<>();
        list.add(4);
        list.add(2);
        list.add(3);
        list.add(1);
        Iterator<Integer> iterator = list.iterator();
        while(iterator.hasNext()) {
            if(iterator.next() == 4) iterator.remove();
        }
        for(int e : list) System.out.print(e + " ");
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
          <ClassHeaderTitle>Iterator & 향상된 for문</ClassHeaderTitle>
        </ClassHeader>
        <ClassContentsContainer>
          <ClassContentsTitle2>{`Iterator<E> 인터페이스`}</ClassContentsTitle2>
          <ClassContentsText>
            자바의 컬렉션 프레임워크는 컬렉션에 저장된 요소를 읽어오는 방법을 Iterator인터페이스로
            표준화하고 있습니다.
            <br />
            <b>Collection 인터페이스</b>에서는{' '}
            <b>
              Iterator 인터페이스를 구현한 클래스의 인스턴스를 반환하는 iterator() 메소드를 정의
            </b>
            하여 각 요소에 접근하도록 하고 있습니다.
            <Java_06_09_Code01 />
            따라서{' '}
            <b>
              Collection 인터페이스를 상속받는 List와 Set 인터페이스에서도 iterator() 메소드를 사용
            </b>
            할 수 있습니다.
            <br />- <ClassContentsCode>hasNext()</ClassContentsCode> : 이터레이션(iteration)이 다음
            요소를 가지고 있으면 true를 반환하고, 더 이상 다음 요소를 가지고 있지 않으면 false를
            반환함.
            <br />- <ClassContentsCode>next()</ClassContentsCode> : 이터레이션(iteration)의 다음
            요소를 반환함.
            <br />- <ClassContentsCode>remove()</ClassContentsCode> : next()로 읽어온 요소를 삭제함.
            <Java_06_09_Code02 />
          </ClassContentsText>
          <br />
          <ClassContentsTitle2>Enhanced For Loop</ClassContentsTitle2>
          <ClassContentsText>
            현재 자바에서는 될 수 있으면 JDK 1.5부터 추가된 <b>Enhanced for 문을 사용하도록 권장</b>
            하고 있습니다.
          </ClassContentsText>
          <ClassContentsTitle3>특징</ClassContentsTitle3>
          <ClassContentsText>
            - Iterator와 같은 성능 유지
            <br />- 코드의 명확성 확보
            <br />- 발생할 수 있는 버그 예방
          </ClassContentsText>
          <ClassContentsTitle3>비교</ClassContentsTitle3>
          <ClassContentsText>
            {`- 기존 for문 : for(초기값; 조건식; 증감식) {…}`}
            <br />
            {`- 향상된 for문 : for(초기화 : 배열) {…}`}
          </ClassContentsText>
          <ClassContentsTitle3>참고</ClassContentsTitle3>
          <ClassContentsText>
            요소의 선택적 제거나 대체등을 수행하기 위해서는 반복자(iterator)사용이 필요 합니다.
          </ClassContentsText>
        </ClassContentsContainer>
      </EachClass>
    </>
  );
};

export default Java_06_09_ClassContents;
