import { JSX, useEffect, useLayoutEffect, useRef, useState } from 'react';

import { useOutletContext, useParams } from 'react-router-dom';

import { CPlusStudyChapter } from '../../../../util/study/CPlusStudyChapter';
import { CStudyChapter } from '../../../../util/study/CStudyChapter';
import { JavaScriptStudyChapter } from '../../../../util/study/JavaScriptStudyChapter';
import { JavaStudyChapter } from '../../../../util/study/JavaStudyChapter';
import { PythonStudyChapter } from '../../../../util/study/PythonStudyChapter';
import {
  Wrap,
  Container,
  LeftContainer,
  RightContainer,
  PageTitleBar,
  MobileInner,
} from '../../../styles/study/Study_Main';
import ScrollToTopButton from '../../ScrollToTopButton';
import Languages_ChapterList from '../components/Languages_ChapterList';
import Languages_ClassList from '../components/Languages_ClassList';
import Languages_List from '../components/Languages_List';
import Languages_Title from '../components/Languages_Title';
import { ChapterType, LanguageArrange, LanguageRefArray, OutletContextType } from '../StudyType';

const Study_Main = (): JSX.Element => {
  const mainContentRef = useOutletContext<OutletContextType>();
  const { language } = useParams(); // url language 가져오기
  const [chapters, setChapters] = useState<ChapterType[]>([]);

  // 페이지 진입 시 스크롤 위치 초기화
  useLayoutEffect(() => {
    if (mainContentRef?.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [language, mainContentRef]);

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

  const scrollRefs = useRef<LanguageRefArray>([]);

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
    scrollRefs.current = [...Array(newChapters.length)].map(() => ({ current: null }));
  }, [language]);

  return (
    <>
      <Wrap>
        <Container className="StudyMain">
          <LeftContainer>
            {currentLanguage ? (
              <Languages_Title language={currentLanguage.name} key={currentLanguage.name} />
            ) : null}
            <Languages_ChapterList
              language={currentLanguage?.name ?? 'Unknown'}
              mainContentRef={mainContentRef}
              selectedChapters={chapters}
              ref={scrollRefs}
            />
            <Languages_List language={language} />
          </LeftContainer>
          <RightContainer>
            <PageTitleBar>언어공부 {currentLanguage?.name}</PageTitleBar>
            <Languages_ClassList
              language={currentLanguage?.name ?? 'Unknown'}
              selectedChapters={chapters}
              ref={scrollRefs}
              key={currentLanguage?.name ?? 'Unknown'}
            />
          </RightContainer>

          <MobileInner>
            <PageTitleBar>언어공부 {currentLanguage?.name}</PageTitleBar>
            {currentLanguage ? (
              <Languages_Title
                language={currentLanguage.name}
                key={`${currentLanguage.name}_MOTITLE`} // key에 'MO' 추가
              />
            ) : null}
            <Languages_ClassList
              language={currentLanguage?.name ?? 'Unknown'}
              selectedChapters={chapters}
              key={`${currentLanguage?.name}_MOCLASSLIST`} // key에 'MO' 추가
            />
          </MobileInner>
        </Container>
        <ScrollToTopButton />
      </Wrap>
    </>
  );
};

export default Study_Main;
