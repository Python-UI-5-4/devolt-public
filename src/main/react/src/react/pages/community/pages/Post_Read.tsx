import { JSX, useLayoutEffect, useState } from 'react';

import { useLocation, useOutletContext, useParams } from 'react-router-dom';

import type { PostRequest } from '../../../../api/AxiosApi/CommunityApi/CommunityApiType';
import type { BoardDataType, BoardNameConverterType, OutletContextType } from '../CommunityType';

import CommunityApi from '../../../../api/AxiosApi/CommunityApi/CommunityApi';
import {
  Wrap,
  Container,
  LeftContainer,
  RightContainer,
  PageTitleBar,
} from '../../../styles/community/Community_Main';
import ScrollToTopButton from '../../ScrollToTopButton';
import Post_MainContents from '../components/common/post/Post_MainContents';
import Post_RelatedPosts from '../components/common/post/Post_RelatedPosts';
import Post_ReplyArea from '../components/common/post/Post_ReplyArea';
import Post_UserProfile from '../components/common/post/Post_UserProfile';

const Post_Read = (): JSX.Element => {
  const location = useLocation();
  const mainContentRef = useOutletContext<OutletContextType>();
  const { boardType, boardId } = useParams();
  const queryParams = new URLSearchParams(location.search);

  const [post, setPost] = useState<BoardDataType>({} as BoardDataType);

  const page: number = Number(queryParams.get('page')) || 1;
  const size: number = Number(queryParams.get('size')) || 10;
  const sortBy: string = queryParams.get('sortBy') || 'createdAt';
  const order: string = queryParams.get('order') || 'desc';

  // Pagination and sorting params
  const [commentCnt, setCommentCnt] = useState<number>(0);

  // 페이지 진입 시 스크롤 위치 초기화
  useLayoutEffect(() => {
    if (mainContentRef?.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [mainContentRef]);

  const boardNameConverter: BoardNameConverterType = [
    { type: 'coding', display: '💻 코딩 질문' },
    { type: 'course', display: '🎓 진로 질문' },
    { type: 'study', display: '️✏️ 스터디' },
    { type: 'team', display: '📋 팀 프로젝트' },
  ];

  const boardDisplayName =
    boardNameConverter.find((item) => item.type === boardType)?.display || boardType;

  // Get Post from Backend
  useLayoutEffect(() => {
    const readPost = async (): Promise<void> => {
      try {
        const data: PostRequest = { id: Number(boardId) };
        const response = await CommunityApi.getPost(data);
        setCommentCnt(response.data.commentCnt);
        setPost(response.data);
      } catch (error) {
        console.error('게시글 불러오는 중 오류 발생 : ', error);
      }
    };
    readPost();
  }, [boardId]);

  return (
    <>
      <Wrap>
        <Container>
          <LeftContainer>
            <Post_UserProfile post={post} />
            <Post_RelatedPosts boardId={boardId} />
          </LeftContainer>
          <RightContainer>
            {/* 커뮤니티로 이동 기능? */}
            <PageTitleBar>{boardDisplayName}</PageTitleBar>
            {/* 실제 게시글 정보 불러오기는 여기서 */}
            <Post_MainContents post={post} setPost={setPost} />
            <PageTitleBar>댓글 {commentCnt}</PageTitleBar>
            <Post_ReplyArea
              boardType={boardType}
              page={page}
              size={size}
              sortBy={sortBy}
              order={order}
              postBoardId={post.boardId}
            />
          </RightContainer>
        </Container>
        <ScrollToTopButton />
      </Wrap>
    </>
  );
};

export default Post_Read;
