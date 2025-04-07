import { JSX, useEffect, useRef, useState } from 'react';

import { useTheme } from '@mui/material';

import {
  RightContainer,
  LeftContainer,
  Container,
  ImageBox,
  Wrap,
  PageTitleBar,
} from '../../../styles/roadmap/Roadmap';
import ScrollToTopButton from '../../ScrollToTopButton';
import Roadmap_List from '../components/Roadmap_List';

const Roadmap_DevOps = (): JSX.Element => {
  const theme = useTheme();
  const mainContentRef = useRef<HTMLDivElement | null>(null);
  const devType = 'devops';

  // 페이지 진입 시 스크롤 위치 초기화
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getImageSrc = (): string => {
    return theme.palette.mode === 'light'
      ? '/images/roadmap/roadmap_do_p_light.png'
      : '/images/roadmap/roadmap_do_p.png';
  };

  const [imageSrc, setImageSrc] = useState(getImageSrc);

  useEffect(() => {
    setImageSrc(getImageSrc());
  }, [theme]);

  return (
    <>
      <Wrap ref={mainContentRef}>
        <Container>
          <LeftContainer>
            <Roadmap_List devType={devType} />
          </LeftContainer>
          <RightContainer>
            <PageTitleBar>데브옵스 개발자 로드맵</PageTitleBar>
            <ImageBox src={imageSrc} alt="데브옵스 개발자 로드맵" />
          </RightContainer>
        </Container>
        <ScrollToTopButton />
      </Wrap>
    </>
  );
};

export default Roadmap_DevOps;
