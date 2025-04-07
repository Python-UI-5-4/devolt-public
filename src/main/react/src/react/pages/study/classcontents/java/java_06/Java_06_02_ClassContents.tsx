import { JSX } from 'react';

import {
  EachClass,
  ClassHeader,
  ClassHeaderTitle,
  ClassContentsText,
  ClassContentsContainer,
  ClassContentsTitle2,
  ClassContentsImage,
  ClassTableBox,
  ClassTable,
  ClassTableTd,
  ClassTableTr,
} from '../../../../../styles/study/Study_Class';
import 'highlight.js/styles/a11y-dark.css';

const Java_06_02_ClassContents = (): JSX.Element => {
  return (
    <>
      <EachClass>
        <ClassHeader>
          <ClassHeaderTitle>컬렉션 프레임워크</ClassHeaderTitle>
        </ClassHeader>
        <ClassContentsContainer>
          <ClassContentsTitle2>컬렉션 프레임워크?</ClassContentsTitle2>
          <ClassContentsText>
            자바는 배열의 여러가지 문제점을 해결하고 , 알려진 자료 구조를 바탕으로 객체를 효율적으로
            추가, 삭제, 검색 할 수 있도록 java.util 패키지에{' '}
            <b>컬렉션과 관련된 인터페이스와 클래스를 제공</b>하고 있습니다.
            <br />
            이들을 총칭해서 컬렉션 프레임워크라고 부릅니다.
            <br />
            즉,{' '}
            <b>
              <b style={{ color: 'red' }}>
                데이터를 저장하는 자료 구조와 데이터를 처리하는 알고리즘을 구조화하여 클래스로
                구현해 놓은 것
              </b>
              입니다.
              <br />
              이러한 컬렉션 프레임워크는 자바의 인터페이스(interface)를 사용하여 구현됩니다.
              <br />
              <b style={{ color: 'red' }}>
                <i>import java.util</i>
              </b>
              <i> 패키지에 포함되어 있습니다. (자바에서 두번째 많이 사용되는 패키지 입니다.)</i>
            </b>
          </ClassContentsText>
          <br />
          <ClassContentsTitle2>컬렉션 프레임워크 주요 인터페이스</ClassContentsTitle2>
          <ClassContentsText>
            <ClassTableBox>
              <ClassTable style={{ textAlign: 'center' }}>
                <thead>
                  <ClassTableTr>
                    <ClassTableTd style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
                      <b>인터페이스</b>
                    </ClassTableTd>
                    <ClassTableTd style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
                      <b>설명</b>
                    </ClassTableTd>
                    <ClassTableTd style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
                      <b>구현 클래스</b>
                    </ClassTableTd>
                  </ClassTableTr>
                </thead>
                <tbody>
                  <ClassTableTr>
                    <ClassTableTd>List</ClassTableTd>
                    <ClassTableTd>순서가 있는데이터의 집합, 데이터의 중복 허용</ClassTableTd>
                    <ClassTableTd>
                      Vector, <b>ArrayList</b>, LinkedList, Stack, Queue
                    </ClassTableTd>
                  </ClassTableTr>
                  <ClassTableTr>
                    <ClassTableTd>Set</ClassTableTd>
                    <ClassTableTd>
                      순서가 없는 데이터의 집합, 데이터 중복 허용하지 않음
                    </ClassTableTd>
                    <ClassTableTd>HashSet, TreeSet</ClassTableTd>
                  </ClassTableTr>
                  <ClassTableTr>
                    <ClassTableTd>{`Map<K, V>`}</ClassTableTd>
                    <ClassTableTd>
                      키와 값의 한쌍으로 이루어지는 데이터의 집합으로 순서가 없음. 이때 키는 중복을
                      허용하지 않지만, 값은 중복될 수 있음.
                    </ClassTableTd>
                    <ClassTableTd>
                      <b>HashMap</b>, TreeMap, Hashtable, Properties
                    </ClassTableTd>
                  </ClassTableTr>
                </tbody>
              </ClassTable>
            </ClassTableBox>
          </ClassContentsText>
          <br />
          <ClassContentsTitle2>컬렉션 클래스</ClassContentsTitle2>
          <ClassContentsText>
            <b>컬렉션 프레임워크에 속하는 인터페이스를 구현한 클래스를 컬렉션 클래스</b>
            라고 합니다.
            <br />
            컬렉션 프레임워크는 모든 컬렉션 클래스는{' '}
            <b>List와 Set, Map 인터페이스 중 하나의 인터페이스를 구현</b>
            하고 있습니다.
            <br />
            Vector나 Hashtable과 같은 컬렉션 클래스는 예전부터 사용해 왔으므로, 기존 코드와의 호환을
            위해 아직도 남아 있습니다.
            <br />
            하지만 기존에 사용하던 컬렉션 클래스를 사용하는 것보다는 새로 추가된{' '}
            <b>ArrayList나 HashMap 클래스</b>를 사용하는 것이 성능 면에서도 더 나은 결과를 얻을 수
            있습니다.
            <ClassContentsImage
              style={{
                width: '100%',
                height: '270px',
                backgroundImage: `url(${'/images/study/java/java_06_02_01.png'})`,
              }}
            />
          </ClassContentsText>
          <br />
          <ClassContentsTitle2>Collection 인터페이스</ClassContentsTitle2>
          <ClassContentsText>
            Collection 인터페이스 하위에 List 인터페이스와 Set 인터페이스가 있습니다.
            <br />
            List를 구현한 클래스는 순차적인 자료를 관리하는데 사용하는 클래스이고, Set 인터페이스는
            우리가 수학 시간에 배운 집합을 생각하면 됩니다.
            <ClassContentsImage
              style={{
                width: '100%',
                height: '300px',
                backgroundImage: `url(${'/images/study/java/java_06_02_02.png'})`,
              }}
            />
          </ClassContentsText>
          <br />
          <ClassContentsTitle2>Map 인터페이스</ClassContentsTitle2>
          <ClassContentsText>
            Map 인터페이스는 하나가 아닌 쌍으로 되어 있는 자료를 관리하는 메서드들이 선언되어
            있습니다.
            <ClassContentsImage
              style={{
                width: '100%',
                height: '200px',
                backgroundImage: `url(${'/images/study/java/java_06_02_03.png'})`,
              }}
            />
          </ClassContentsText>
        </ClassContentsContainer>
      </EachClass>
    </>
  );
};

export default Java_06_02_ClassContents;
