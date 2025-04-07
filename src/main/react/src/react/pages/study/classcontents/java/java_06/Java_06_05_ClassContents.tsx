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
  ClassContentsCodeBox,
} from '../../../../../styles/study/Study_Class';

import 'highlight.js/styles/a11y-dark.css';

const Java_06_05_ClassContents = (): JSX.Element => {
  const Java_06_05_Code01 = (): JSX.Element => {
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
    HashSet<String> set = new HashSet<>(Arrays.asList("H", "e", "l", "l", "o"));
    System.out.println(set);
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_05_Code02 = (): JSX.Element => {
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
HashSet<String> set = new HashSet<>();
  set.add("Java");
  set.add("C");
  set.add("C++");
  set.add("Python");
  set.add("Java");

  for(String e : set) {
      System.out.print(e + " ");
  }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_05_Code03 = (): JSX.Element => {
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
public class MemberHashSetTest {
    public static void main(String[] args) {
        HashSet<Member> hashSet = new HashSet<>();
        Member member1 = new Member(1001, "유나");
        Member member2 = new Member(1002, "채원");
        Member member3 = new Member(1003, "지수");
        hashSet.add(member1);
        hashSet.add(member2);
        hashSet.add(member3);

        hashSet.add(new Member(1003, "카리나"));
        for(Member e : hashSet) e.showMember();
    }
}

class Member {
    int id;
    String name;
    @Override
    public int hashCode() {
        return id;
    }
    @Override
    public boolean equals(Object obj) {
        if(obj instanceof Member) {
            Member member = (Member) obj;
            if(this.id == member.id) return true;
            else return false;
        }
        return false;
    }

    public Member(int id, String name) {
        this.id = id;
        this.name = name;
    }
    public void showMember() {
        System.out.println("아이디 : " + id);
        System.out.println("이름 : " + name);
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_05_Code04 = (): JSX.Element => {
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
    HashSet<Integer> s1 = new HashSet<>(Arrays.asList(1,2,3,4,5,6));
        HashSet<Integer> s2 = new HashSet<>(Arrays.asList(4,5,6,7,8,9));
        s1.retainAll(s2); // 교집합을 수행하는 메소드
        System.out.println(s1);
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_05_Code05 = (): JSX.Element => {
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
        HashSet<Integer> s1 = new HashSet<>(Arrays.asList(1,2,3,4,5,6));
        HashSet<Integer> s2 = new HashSet<>(Arrays.asList(4,5,6,7,8,9));
        s1.addAll(s2); // 합집합을 수행
        System.out.println(s1);
    }
          `}
        </code>
      </pre>
    );
  };

  const Java_06_05_Code06 = (): JSX.Element => {
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
    HashSet<Integer> s1 = new HashSet<>(Arrays.asList(1, 2, 3, 4, 5, 6));
    HashSet<Integer> s2 = new HashSet<>(Arrays.asList(4, 5, 6, 7, 8, 9));

    HashSet<Integer> substract = new HashSet<>(s1);  // s1으로 substract 생성
    substract.removeAll(s2); // 차집합 수행
    System.out.println(substract);  // [1, 2, 3] 출력
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_05_Code07 = (): JSX.Element => {
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
    HashSet<String> set = new HashSet<>();
    set.add("Jump");
    set.add("To");
    set.add("Java");
    System.out.println(set);  // [Java, To, Jump] 출력
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_05_Code08 = (): JSX.Element => {
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
    HashSet<String> set = new HashSet<>();
    set.add("Jump");
    set.addAll(Arrays.asList("To", "Java"));
    System.out.println(set);  // [Java, To, Jump] 출력
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_05_Code09 = (): JSX.Element => {
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
    HashSet<String> set = new HashSet<>(Arrays.asList("Jump", "To", "Java"));
    set.remove("To");
    System.out.println(set);  // [Java, Jump] 출력
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_05_Code10 = (): JSX.Element => {
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
public class SetEx {
    public static void main(String[] args) {
        HashSet<Integer> set = new HashSet<>();  // 중복값을 허용하지 않는 특성이 있음
        while (set.size() < 6) {
            int rand = (int)(Math.random() * 45) + 1;
            set.add(rand);
        }
        System.out.println(set);
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
          <ClassHeaderTitle>Set Interface</ClassHeaderTitle>
        </ClassHeader>
        <ClassContentsContainer>
          <ClassContentsText>
            <b>
              순서와 상관없이 중복을 허용하지 않는 경우에는 Set 인터페이스를 구현한 클래스를 사용
            </b>
            합니다.
          </ClassContentsText>
          <br />
          <ClassContentsTitle2>HashSet 클래스</ClassContentsTitle2>
          <ClassContentsText>
            - 요소의 순서를 유지 하지 않음
            <br />- 요소의 중복 허용하지 않음 (hashCode() 리턴값을 사용하여 객체가 동일한지 판단
            합니다.)
            <br />- 수학의 집합과 유사한 개념
            <br />- 매우 빠른 검색이 필요한 경우 사용 O(1)
            <ClassContentsImage
              style={{
                width: '100%',
                height: '120px',
                backgroundImage: `url(${'/images/study/java/java_06_05_01.png'})`,
              }}
            />
            <Java_06_05_Code01 />
            <Java_06_05_Code02 />
          </ClassContentsText>
          <br />
          <ClassContentsTitle2>객체가 동일함을 구현하기</ClassContentsTitle2>
          <ClassContentsText>
            기본적으로 <b>인스턴스 주소가 같으면 같은 객체</b>입니다. 하지만 아래의 예제에서는 회원
            아이디가 같으면 같은 회원으로 볼 수 있습니다. 이런 경우 Object 클래스의 hashCode()와
            equals()를 오버라이드 해서 사용 할 수 있습니다.
            <ClassContentsCodeBox>
              👉 모든 클래스는 Object의 매서드를 사용할 수 있고, 필요에 따라 재정의해서 사용 할 수
              있습니다. 하지만 Object의 모든 메소드를 재정의해서 사용할 수 있는 것은 아닙니다.
              (final로 선언된 메소드는 재정의 할 수 없습니다.)
            </ClassContentsCodeBox>
            <Java_06_05_Code03 />
          </ClassContentsText>
          <br />
          <ClassContentsTitle2>교집합, 합집합, 차집합 구하기</ClassContentsTitle2>
          <ClassContentsTitle3>교집합</ClassContentsTitle3>
          <Java_06_05_Code04 />
          <ClassContentsTitle3>합집합</ClassContentsTitle3>
          <Java_06_05_Code05 />
          <ClassContentsTitle3>차집합</ClassContentsTitle3>
          <Java_06_05_Code06 />
          <br />
          <ClassContentsTitle2>관련 메소드</ClassContentsTitle2>
          <ClassContentsTitle3>값 추가하기(add)</ClassContentsTitle3>
          <Java_06_05_Code07 />
          <ClassContentsTitle3>값 여러 개 추가하기(addAll)</ClassContentsTitle3>
          <Java_06_05_Code08 />
          <ClassContentsTitle3>특정 값 제거하기(remove)</ClassContentsTitle3>
          <Java_06_05_Code09 />
          <ClassContentsTitle3>기타</ClassContentsTitle3>
          <ClassContentsText>
            - TreeSet : 오름차순으로 값을 정렬하여 저장하는 특징이 있다.
            <br />- LinkedHashSet : 입력한 순서대로 값을 정렬하여 저장하는 특징이 있다.
          </ClassContentsText>
          <ClassContentsTitle2>
            <b style={{ color: 'red' }}>실습 문제 (로또 번호 중복 제거)</b>
          </ClassContentsTitle2>
          <Java_06_05_Code10 />
        </ClassContentsContainer>
      </EachClass>
    </>
  );
};

export default Java_06_05_ClassContents;
