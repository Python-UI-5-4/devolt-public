import { JSX, useLayoutEffect, useState } from 'react';

import { useOutletContext } from 'react-router-dom';

import {
  Wrap,
  Container,
  LeftContainer,
  RightContainer,
  PageTitleBar,
  PageSubTitleBar,
} from '../../../../styles/mypage/MyPage_Main';
import ScrollToTopButton from '../../../ScrollToTopButton';
import Board_MenteeList_MyPage from '../../components/Board/Mentor/Board_MenteeList_MyPage';
import Board_MenteePost_MyPage from '../../components/Board/Mentor/Board_MenteePost_Mypage';
import LeftMenus from '../../components/LeftMenus';
import LeftTopProfile from '../../components/LeftTopProfile';
import { OutletContextType } from '../../MyPageType';

const MyPage_MenteeList = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  const [size] = useState<number>(5);
  const mainContentRef = useOutletContext<OutletContextType>();

  // 페이지 진입 시 스크롤 위치 초기화
  useLayoutEffect(() => {
    if (mainContentRef?.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [mainContentRef]);

  // 페이지 변경 함수 추가
  const handlePageChange = (newPage: number): void => {
    setPage(newPage);
  };

  return (
    <>
      <Wrap>
        <Container>
          <LeftContainer>
            <LeftTopProfile />
            <LeftMenus />
          </LeftContainer>
          <RightContainer>
            <PageTitleBar>멘토링 전용 페이지</PageTitleBar>
            <PageSubTitleBar>내가 작성한 글</PageSubTitleBar>
            <Board_MenteePost_MyPage page={page} size={size} onPageChange={handlePageChange} />
            <PageSubTitleBar>내 멘티 보기</PageSubTitleBar>
            <Board_MenteeList_MyPage page={page} size={size} onPageChange={handlePageChange} />
          </RightContainer>
        </Container>
        <ScrollToTopButton />
      </Wrap>
    </>
  );
};

export default MyPage_MenteeList;
