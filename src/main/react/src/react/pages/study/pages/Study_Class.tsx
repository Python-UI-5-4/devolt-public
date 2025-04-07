import React, { useState, useEffect, JSX, useLayoutEffect } from 'react';

import { useNavigate, useOutletContext, useParams } from 'react-router-dom';

import type { ChapterType, LanguageArrange, OutletContextType } from '../StudyType';

import { CPlusStudyChapter } from '../../../../util/study/CPlusStudyChapter';
import { CStudyChapter } from '../../../../util/study/CStudyChapter';
import { JavaScriptStudyChapter } from '../../../../util/study/JavaScriptStudyChapter';
import { JavaStudyChapter } from '../../../../util/study/JavaStudyChapter';
import { PythonStudyChapter } from '../../../../util/study/PythonStudyChapter';
import {
  ArrowContainer,
  ChapterListTitle,
  ChapterOuter,
} from '../../../styles/study/Study_Components';
import {
  Wrap,
  Container,
  LeftContainer,
  RightContainer,
  MobileInner,
  PageTitleBar,
} from '../../../styles/study/Study_Main';
import ScrollToTopButton from '../../ScrollToTopButton';
import Languages_ArrowNavigation from '../components/Languages_ArrowNavigation';
import Languages_ClassList from '../components/Languages_ClassList';
import Languages_List from '../components/Languages_List';
import Languages_Title from '../components/Languages_Title';

const Study_Class = (): JSX.Element => {
  const mainContentRef = useOutletContext<OutletContextType>();
  const { language, cat1, cat2 } = useParams();
  const [chapters, setChapters] = useState<ChapterType[]>([]);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (mainContentRef?.current) {
      mainContentRef.current.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [language, cat1, cat2, mainContentRef]);

  const languages: LanguageArrange = [
    { name: 'Java' },
    { name: 'C' },
    { name: 'CPlus' },
    { name: 'JavaScript' },
    { name: 'Python' },
  ];

  const currentLanguage = languages.find(
    (lang) => lang.name.toLowerCase() === language?.toLowerCase(),
  );

  useEffect(() => {
    let newChapters: ChapterType[] = [];
    switch (language?.toLowerCase()) {
      case 'java':
        newChapters = JavaStudyChapter;
        break;
      case 'c':
        newChapters = CStudyChapter;
        break;
      case 'cplus':
        newChapters = CPlusStudyChapter;
        break;
      case 'javascript':
        newChapters = JavaScriptStudyChapter;
        break;
      case 'python':
        newChapters = PythonStudyChapter;
        break;
      default:
        newChapters = [];
        break;
    }
    setChapters(newChapters);
  }, [language, cat1]);

  // 동적 컴포넌트를 직접 import 해서 렌더링
  const [ClassContentsComponent, setClassContentsComponent] = useState<React.FC | null>(null);

  const modules = import.meta.glob<{ default: React.FC }>(
    '../classcontents/**/**/**_ClassContents.tsx',
  );

  useEffect(() => {
    if (!language || !cat1 || !cat2 || !currentLanguage) return;

    const key = `../classcontents/${language.toLowerCase()}/${language.toLowerCase()}_${cat1}/${currentLanguage.name}_${cat1}_${cat2}_ClassContents.tsx`;

    const loader = modules[key as string];
    if (loader) {
      loader().then((mod) => setClassContentsComponent(() => mod.default));
    } else {
      console.error('컴포넌트 파일을 찾을 수 없습니다:', key);
    }
  }, [language, cat1, cat2, currentLanguage]);

  const handleLanguageClick = (): void => {
    navigate(`/study/${language}`);
  };

  return (
    <Wrap>
      <Container>
        <LeftContainer>
          {currentLanguage ? (
            <Languages_Title
              language={currentLanguage.name}
              key={`${currentLanguage.name}-${cat1}-${cat2}`}
            />
          ) : null}
          <Languages_ClassList
            language={currentLanguage?.name ?? 'Unknown'}
            selectedChapters={chapters}
            key={`${currentLanguage?.name}-${cat1}`}
            filtered={true}
          />
          <Languages_List language={language} />
          <ChapterOuter>
            <ChapterListTitle
              onClick={() => handleLanguageClick()}
              style={{ cursor: 'pointer', paddingBottom: '3px' }}
            >
              👉 {currentLanguage?.name} 메인으로 이동
            </ChapterListTitle>
          </ChapterOuter>
        </LeftContainer>
        <RightContainer>
          {/* Show a loading message or fallback if the component is not yet loaded */}
          {ClassContentsComponent ? (
            <ClassContentsComponent key={`${language}-${cat1}-${cat2}`} />
          ) : (
            <div
              style={{
                color: 'var(--devolt-white)',
                fontFamily: 'bold',
                textAlign: 'center',
                paddingTop: '50px',
                fontSize: '14px',
              }}
            >
              😇 데이터 가져오는중
            </div>
          )}
          <ArrowContainer>
            <Languages_ArrowNavigation direction="left" language={language} />
            <Languages_ArrowNavigation direction="right" language={language} />
          </ArrowContainer>
        </RightContainer>

        <MobileInner>
          <PageTitleBar style={{ cursor: 'pointer' }} onClick={() => handleLanguageClick()}>
            언어공부 {currentLanguage?.name}
          </PageTitleBar>
          <Languages_ClassList
            language={currentLanguage?.name ?? 'Unknown'}
            selectedChapters={chapters}
            key={`${currentLanguage?.name}-${cat1}`}
            filtered={true}
          />
          {ClassContentsComponent ? (
            <ClassContentsComponent key={`${language}-${cat1}-${cat2}`} />
          ) : (
            <div
              style={{
                color: 'var(--devolt-white)',
                fontFamily: 'bold',
                textAlign: 'center',
                paddingTop: '50px',
                fontSize: '14px',
              }}
            >
              😇 데이터 가져오는중
            </div>
          )}
        </MobileInner>
      </Container>
      <ScrollToTopButton />
    </Wrap>
  );
};

export default Study_Class;
