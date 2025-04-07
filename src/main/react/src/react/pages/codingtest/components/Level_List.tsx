import React, { JSX } from 'react';

import { useNavigate, useOutletContext } from 'react-router-dom';

import {
  ChapterOuter,
  ChapterInner,
  ChapterName,
  ChapterListTitle,
} from '../../../styles/codingtest/CodingTest_Components';
import {
  LevelListProps,
  LevelTypeArray,
  LevelTypeObject,
  OutletContextType,
} from '../CodingTestType';

const Level_List = ({ level }: LevelListProps): JSX.Element => {
  const navigate = useNavigate();
  const mainContentRef = useOutletContext<OutletContextType>();

  const levels: LevelTypeArray = [
    { name: 'practice' },
    { name: 'basic' },
    { name: 'intermediate' },
    { name: 'expert' },
  ];

  const levelNames: LevelTypeObject = {
    practice: '연습문제',
    basic: '1단계',
    intermediate: '2단계',
    expert: '3단계',
  };

  const handleLevelClick = (level: string): void => {
    navigate(`/codingtest/${level}`);
    setTimeout(() => {
      if (mainContentRef?.current) {
        mainContentRef.current.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      } else {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    }, 0); // 0ms 뒤에 실행하여 확실하게 스크롤 이동
  };

  return (
    <>
      <ChapterOuter>
        <ChapterListTitle>🏆 전체 단계 보기</ChapterListTitle>
        <ChapterInner>
          {levels.map((lvl, index) => (
            <ChapterName
              key={index}
              onClick={() => handleLevelClick(lvl.name)} // 클릭 시 핸들러 호출
              style={{
                color: lvl.name === level ? 'var(--devolt-purple)' : 'var(--devolt-white)',
                cursor: 'pointer',
              }}
            >
              {levelNames[lvl.name as keyof LevelTypeObject]}
            </ChapterName>
          ))}
        </ChapterInner>
      </ChapterOuter>
    </>
  );
};

export default Level_List;
