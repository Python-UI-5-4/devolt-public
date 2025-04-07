import { JSX } from 'react';

import { useNavigate, useOutletContext } from 'react-router-dom';

import {
  ChapterInner,
  ChapterListTitle,
  ChapterName,
  ChapterOuter,
} from '../../../styles/roadmap/Roadmap';

interface RoadmapListProps {
  devType: string;
}

interface OutletContextProps {
  mainContentRef: React.RefObject<HTMLDivElement>;
}

const Roadmap_List = ({ devType }: RoadmapListProps): JSX.Element => {
  const navigate = useNavigate();
  const { mainContentRef } = useOutletContext<OutletContextProps>();

  const devs = [
    { name: 'frontend' },
    { name: 'backend' },
    { name: 'devops' },
    { name: 'fullstack' },
  ];

  const devNames = {
    frontend: '프론트엔드 개발자',
    backend: '백엔드 개발자',
    devops: '데브옵스 개발자',
    fullstack: '풀스택 개발자',
  } as const;

  const handleDevClick = (devType: string): void => {
    navigate(`/roadmap/${devType}`);
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
        <ChapterListTitle>⛳ 전체 로드맵 보기</ChapterListTitle>
        <ChapterInner>
          {devs.map((dev, index) => (
            <ChapterName
              key={index}
              onClick={() => handleDevClick(dev.name)} // 클릭 시 핸들러 호출
              style={{
                color: dev.name === devType ? 'var(--devolt-purple)' : 'var(--devolt-white)',
                cursor: 'pointer',
              }}
            >
              {devNames[dev.name as keyof typeof devNames]}
            </ChapterName>
          ))}
        </ChapterInner>
      </ChapterOuter>
    </>
  );
};

export default Roadmap_List;
