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
  ClassContentsTextTab,
  ClassContentsCode,
  ClassTableBox,
  ClassTable,
  ClassTableTd,
  ClassTableTr,
} from '../../../../../styles/study/Study_Class';
import 'highlight.js/styles/a11y-dark.css';

const Java_05_06_ClassContents = (): JSX.Element => {
  const Java_05_06_Code01 = (): JSX.Element => {
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
Date now = new Date();
          `}
        </code>
      </pre>
    );
  };

  const Java_05_06_Code02 = (): JSX.Element => {
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
public static void main(String[]args) {
  Date now = new Date();

  String strNow1 = now.toString();
  System.out.println(strNow1);
	// 날짜를 원하는 포맷으로 파싱 시켜 줍니다.(패턴 매칭)
  SimpleDateFormat sdf = new SimpleDateFormat("yyMMdd");
  String strNow2 = sdf.format(now);
  System.out.println(strNow2);
}
          `}
        </code>
      </pre>
    );
  };

  const Java_05_06_Code03 = (): JSX.Element => {
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
package 열거타입;
import java.text.SimpleDateFormat;
import java.util.Date;
// Date 클래스 : 운영체제로 부터 시간을 가져 옴
public class Main {
    public static void main(String[] args) {
        Date now = new Date();
        // yyyy : 년도를 4자리로 표현
        // yy : 년도를 2자리로 표현
        // MM : 월을 표시 (반드시 대문자만 사용)
        // mm : 분을 표시 한다는 의미
        // HH : 24시간제 표시
        // hh : 12시간제 표시
        SimpleDateFormat f1, f2, f3, f4, f5, f6, f7;
        f1 = new SimpleDateFormat("yyyy-MM-dd");
        f2 = new SimpleDateFormat("yy/MM/dd");
        f3 = new SimpleDateFormat("yyyy년MM월dd일");
        f4 = new SimpleDateFormat("HH:mm:ss");
        f5 = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        f6 = new SimpleDateFormat("오늘은 M월의 W번째 주, d번째 날 입니다.");
        f7 = new SimpleDateFormat("오늘은 yyyy년의 w주차 입니다.");
        System.out.println(f1.format(now));
        System.out.println(f2.format(now));
        System.out.println(f3.format(now));
        System.out.println(f4.format(now));
        System.out.println(f5.format(now));
        System.out.println(f6.format(now));
        System.out.println(f7.format(now));
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_05_06_Code04 = (): JSX.Element => {
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
Calendar now = Calendar.getInstance();
System.out.println(now.get(Calendar.YEAR));
System.out.println(now.get(Calendar.MONTH)+1);
System.out.println(now.get(Calendar.DAY_OF_MONTH));
System.out.println(now.get(Calendar.DAY_OF_WEEK));
System.out.println(now.get(Calendar.AM_PM));
System.out.println(now.get(Calendar.HOUR));
System.out.println(now.get(Calendar.MINUTE));
System.out.println(now.get(Calendar.SECOND));
          `}
        </code>
      </pre>
    );
  };

  const Java_05_06_Code05 = (): JSX.Element => {
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
    Calendar now = Calendar.getInstance();
    int year = now.get(Calendar.YEAR);
    int mon = now.get(Calendar.MONTH)+1;
    int day = now.get(Calendar.DAY_OF_MONTH);
    int isPM = now.get(Calendar.AM_PM);
    int hour = now.get(Calendar.HOUR);
    int min = now.get(Calendar.MINUTE);
    int sec = now.get(Calendar.SECOND);
    if(isPM == 1) hour += 12;
    System.out.printf("%d년%02d월%02d일 %02d시%02d분%02d초\n", year, mon, day, hour, min, sec);
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
          <ClassHeaderTitle>Date & Calendar 클래스</ClassHeaderTitle>
        </ClassHeader>
        <ClassContentsContainer>
          <ClassContentsTitle2>Date 클래스</ClassContentsTitle2>
          <ClassContentsText>
            <ClassContentsCode>Date</ClassContentsCode> 클래스는 자바의 초기 버전부터 제공되어
            왔으며, 날짜와 시간을 나타내는 데 사용됩니다. 이 클래스는{' '}
            <ClassContentsCode>java.util</ClassContentsCode> 패키지에 포함되어 있으며, 특정 시점을
            밀리초로 표현합니다. <ClassContentsCode>Date</ClassContentsCode>
            객체는 UTC(협정 세계시)를 기준으로 1970년 1월 1일 자정부터 경과한 시간을 밀리초 단위로
            저장합니다.
            <Java_05_06_Code01 />
            <Java_05_06_Code02 />
            <Java_05_06_Code03 />
          </ClassContentsText>
          <br />
          <ClassContentsTitle2>Calendar 클래스</ClassContentsTitle2>
          <ClassContentsText>
            <ClassContentsCode>Calendar</ClassContentsCode> 클래스는
            <ClassContentsCode>Date</ClassContentsCode> 클래스의 단점을 보완하기 위해
            도입되었습니다. <ClassContentsCode>java.util</ClassContentsCode> 패키지에 속해 있으며,
            특정 시점에 대한 더 많은 정보와 다양한 달력 시스템을 지원합니다.{' '}
            <ClassContentsCode>Calendar</ClassContentsCode>는 추상 클래스로, 특정 국가나 문화의 달력
            시스템에 맞게 하위 클래스에서 구현됩니다. 예를 들어,{' '}
            <ClassContentsCode>GregorianCalendar</ClassContentsCode>는 대부분의 서양 국가에서
            사용하는 그레고리안 달력을 구현합니다.
            <Java_05_06_Code04 />
          </ClassContentsText>
          <br />
          <ClassContentsTitle3>예제</ClassContentsTitle3>
          <ClassContentsText>
            Calendar 클래스로 <ClassContentsCode>yyyy년MM월dd HH시mm분ss초</ClassContentsCode>{' '}
            포맷과 동일하게 출력하기
            <Java_05_06_Code05 />
          </ClassContentsText>
          <br />
          <ClassContentsTitle2>JDK 8 이후의 대안: java.time 패키지</ClassContentsTitle2>
          <ClassContentsText>
            JDK 8에서 도입된 <ClassContentsCode>java.time</ClassContentsCode> 패키지는
            <ClassContentsCode>Date</ClassContentsCode>와{' '}
            <ClassContentsCode>Calendar</ClassContentsCode>
            클래스의 단점을 해결하고, 날짜와 시간을 다루는 더 나은 방법을 제공합니다. 이 패키지는
            Joda-Time 라이브러리에서 영감을 받았으며, 다음과 같은 주요 클래스를 포함합니다.
            <br />
            <br />- <b>LocalDate</b> : 날짜를 나타내며, 연, 월, 일 정보를 포함합니다(시간대 정보
            없음)
            <br />- 시간을 나타내며, 시, 분, 초, 나노초 정보를 포함합니다(시간대 정보 없음)
            <b>LocalTime</b> : <br />- <b>LocalDateTime</b> : 날짜와 시간을 모두 나타냅니다(시간대
            정보 없음)
            <br />- <b>ZonedDateTime</b> : 시간대를 고려한 날짜와 시간 정보를 제공합니다.
            <br />- <b>Instant</b> : 특정 시점을 UTC 기준으로 나타냅니다.
            <br />
            <br />
            <ClassContentsCode>java.time</ClassContentsCode> 패키지의 클래스들은 불변 객체이며,
            풍부한 API를 제공하여 날짜와 시간을 더 쉽고 정확하게 다룰 수 있게 해줍니다. 예를 들어,
            날짜 간의 차이를 계산하거나, 날짜를 조정하는 등의 작업이 간단해졌습니다.
          </ClassContentsText>
          <br />
          <ClassContentsTitle3>
            <b style={{ color: 'var(--devolt-white)' }}>결론</b>
          </ClassContentsTitle3>
          <ClassContentsText>
            <ClassContentsCode>Date</ClassContentsCode>와{' '}
            <ClassContentsCode>Calendar</ClassContentsCode>
            클래스는 여전히 사용할 수 있지만, <ClassContentsCode>java.time</ClassContentsCode>{' '}
            패키지가 제공하는 더 현대적이고 강력한 날짜와 시간 API를 사용하는 것이 좋습니다.{' '}
            <ClassContentsCode>java.time</ClassContentsCode> 패키지는 JDK 8 이상에서 사용할 수
            있으며, 날짜와 시간을 다루는 작업을 더 쉽고, 효율적이며, 오류 가능성을 줄이는 방식으로
            수행할 수 있도록 설계되었습니다.
          </ClassContentsText>
          <br />
          <ClassContentsTitle3>
            <ClassContentsCode>java.time</ClassContentsCode>{' '}
            <b style={{ color: 'var(--devolt-white)' }}>패키지의 장점</b>
          </ClassContentsTitle3>
          <ClassContentsText>
            - <b>불변성(Immutability)</b>
            <br />
            <ClassContentsTextTab>
              <ClassContentsCode>java.time</ClassContentsCode> 패키지의 날짜와 시간 객체들은
              불변입니다. 이는 객체가 한 번 생성되면 그 상태를 변경할 수 없음을 의미합니다. 불변
              객체를 사용함으로써, 멀티스레드 환경에서의 안전성과 오류 발생 가능성 감소 등의 이점을
              얻을 수 있습니다.
            </ClassContentsTextTab>
            - <b>명확성(Clearness)</b>
            <br />
            <ClassContentsTextTab>
              <ClassContentsCode>java.time</ClassContentsCode> 패키지는 날짜와 시간을 다루는 데
              있어서 명확하고 직관적인 API를 제공합니다. 예를 들어,{' '}
              <ClassContentsCode>plusDays</ClassContentsCode>,
              <ClassContentsCode>minusWeeks</ClassContentsCode> 같은 메소드를 통해 날짜를 조작할 수
              있으며, 메소드 이름만으로도 그 기능을 쉽게 예측할 수 있습니다.
            </ClassContentsTextTab>
            - <b>유연성(Flexibility)</b>
            <br />
            <ClassContentsTextTab>
              <ClassContentsCode>java.time</ClassContentsCode> 패키지는 다양한 시간대를 지원하며,
              날짜와 시간을 다루는 복잡한 계산을 손쉽게 처리할 수 있는 유연성을 제공합니다. 또한,
              다양한 포맷으로 날짜와 시간을 파싱하거나 포매팅할 수 있는 강력한 기능을 제공합니다.
            </ClassContentsTextTab>
            - <b>상호 운용성(Interoperability)</b>
            <br />
            <ClassContentsTextTab>
              기존의 <ClassContentsCode>Date</ClassContentsCode> 및
              <ClassContentsCode>Calendar</ClassContentsCode> 객체와
              <ClassContentsCode>java.time</ClassContentsCode> 패키지 사이의 상호 운용성을 위한
              메소드들이 제공됩니다. 이를 통해 기존 코드 베이스를 쉽게 새로운 API로 마이그레이션할
              수 있습니다.
            </ClassContentsTextTab>
          </ClassContentsText>
          <ClassContentsTitle3>
            <b style={{ color: 'var(--devolt-white)' }}>클래스 비교</b>
          </ClassContentsTitle3>
          <ClassTableBox>
            <ClassTable style={{ textAlign: 'center' }}>
              <thead>
                <ClassTableTr>
                  <ClassTableTd style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
                    <b>특징</b>
                  </ClassTableTd>
                  <ClassTableTd style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
                    <b>Date</b>
                  </ClassTableTd>
                  <ClassTableTd style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
                    <b>Calendar</b>
                  </ClassTableTd>
                  <ClassTableTd style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
                    <b>LocalDateTime</b>
                  </ClassTableTd>
                </ClassTableTr>
              </thead>
              <tbody>
                <ClassTableTr>
                  <ClassTableTd>
                    <b>도입 시점</b>
                  </ClassTableTd>
                  <ClassTableTd>JDK 1.0</ClassTableTd>
                  <ClassTableTd>JDK 1.1</ClassTableTd>
                  <ClassTableTd>JDK 8</ClassTableTd>
                </ClassTableTr>
                <ClassTableTr>
                  <ClassTableTd>
                    <b>불변성</b>
                  </ClassTableTd>
                  <ClassTableTd>X (변경 가능)</ClassTableTd>
                  <ClassTableTd>X (변경 가능)</ClassTableTd>
                  <ClassTableTd>O (불변)</ClassTableTd>
                </ClassTableTr>
                <ClassTableTr>
                  <ClassTableTd>
                    <b>스레드 안전성</b>
                  </ClassTableTd>
                  <ClassTableTd>X</ClassTableTd>
                  <ClassTableTd>X</ClassTableTd>
                  <ClassTableTd>O</ClassTableTd>
                </ClassTableTr>
                <ClassTableTr>
                  <ClassTableTd>
                    <b>시간대 지원</b>
                  </ClassTableTd>
                  <ClassTableTd>X</ClassTableTd>
                  <ClassTableTd>O</ClassTableTd>
                  <ClassTableTd>
                    X (<ClassContentsCode>ZonedDateTime</ClassContentsCode> 필요)
                  </ClassTableTd>
                </ClassTableTr>
                <ClassTableTr>
                  <ClassTableTd>
                    <b>로케일 지원</b>
                  </ClassTableTd>
                  <ClassTableTd>X</ClassTableTd>
                  <ClassTableTd>O</ClassTableTd>
                  <ClassTableTd>
                    X (<ClassContentsCode>java.time.format</ClassContentsCode> 필요)
                  </ClassTableTd>
                </ClassTableTr>
                <ClassTableTr>
                  <ClassTableTd>
                    <b>API 복잡성</b>
                  </ClassTableTd>
                  <ClassTableTd>매우 낮음 (단순)</ClassTableTd>
                  <ClassTableTd>중간 (복잡한 메서드 구조)</ClassTableTd>
                  <ClassTableTd>매우 낮음 (간결한 메서드 체이닝)</ClassTableTd>
                </ClassTableTr>
                <ClassTableTr>
                  <ClassTableTd>
                    <b>가독성</b>
                  </ClassTableTd>
                  <ClassTableTd>낮음 (많은 메서드 비권장)</ClassTableTd>
                  <ClassTableTd>중간 (메서드가 명시적이지 않음)</ClassTableTd>
                  <ClassTableTd>높음 (명확하고 직관적임)</ClassTableTd>
                </ClassTableTr>
                <ClassTableTr>
                  <ClassTableTd>
                    <b>날짜 조작 용이성</b>
                  </ClassTableTd>
                  <ClassTableTd>매우 낮음</ClassTableTd>
                  <ClassTableTd>중간</ClassTableTd>
                  <ClassTableTd>매우 높음</ClassTableTd>
                </ClassTableTr>
                <ClassTableTr>
                  <ClassTableTd>
                    <b>날짜/시간 연산 지원</b>
                  </ClassTableTd>
                  <ClassTableTd>제한적</ClassTableTd>
                  <ClassTableTd>X</ClassTableTd>
                  <ClassTableTd>
                    O (메서드 체이닝 및 <ClassContentsCode>Period</ClassContentsCode>/
                    <ClassContentsCode>Duration</ClassContentsCode>)
                  </ClassTableTd>
                </ClassTableTr>
              </tbody>
            </ClassTable>
          </ClassTableBox>
        </ClassContentsContainer>
      </EachClass>
    </>
  );
};

export default Java_05_06_ClassContents;
