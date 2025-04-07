import React, { forwardRef } from 'react';

import type { ChapterType, LanguageRefArray, LanguageTitleProps } from '../StudyType';

import {
  ChapterOuter,
  ChapterInner,
  ChapterName,
  ChapterListTitle,
} from '../../../styles/study/Study_Components';

const Languages_ChapterList = forwardRef<LanguageRefArray, LanguageTitleProps>(
  ({ mainContentRef, selectedChapters }, ref) => {
    // Scrolling Action Set
    const handleScrollToSection = (clsId: number): void => {
      if (!ref || typeof ref !== 'object' || !('current' in ref) || !ref.current) return;

      const sectionElement = ref.current[clsId as number]?.current;
      const offset = 50;
      if (sectionElement && mainContentRef?.current) {
        const mainContent = mainContentRef.current;

        // MainContent 내에서의 스크롤 위치 계산
        const elementPosition = sectionElement.offsetTop; // MainContent 기준
        const offsetPosition = elementPosition - offset;

        mainContent.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    };

    // Chapter Shortcut Set
    const ChapterComponent: React.FC<{ cls: ChapterType; num: number }> = ({ cls, num }) => {
      return <ChapterName onClick={() => handleScrollToSection(num)}>{cls.title}</ChapterName>;
    };

    return (
      <>
        <ChapterOuter>
          <ChapterListTitle>📍 원하는 챕터로 스크롤</ChapterListTitle>
          <ChapterInner>
            {selectedChapters?.map((cls, index) => (
              <ChapterComponent key={cls.id} cls={cls} num={index} />
            ))}
          </ChapterInner>
        </ChapterOuter>
      </>
    );
  },
);

export default React.memo(Languages_ChapterList);
