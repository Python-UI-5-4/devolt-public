import { JSX, useLayoutEffect } from 'react';

import { useLocation, useOutletContext, useParams } from 'react-router-dom';

import { useQueries } from '@tanstack/react-query';
import { AxiosPromise } from 'axios';

import type { MyBoardNameConverterType, OutletContextType } from './MyPageBoardType';

import Cs_Post_MainContents from './Cs_Post_MainContents';
import Cs_Post_ReplyArea from './Cs_Post_ReplyArea';
import Cs_Post_UserProfile from './Cs_Post_UserProfile';
import MyPageApi from '../../../../../api/AxiosApi/MyPageApi/MyPageApi';
import {
  MyReplyResponse,
  MyReportCommentRequest,
  MyReportCommentResponse,
  MyReportPostRequest,
  MySuggestionCommentRequest,
  MySuggestionCommentResponse,
  MySuggestionPostRequest,
  ReportBoardDataType,
  SuggestionBoardDataType,
} from '../../../../../api/AxiosApi/MyPageApi/MyPageApiTypes';
import {
  Wrap,
  Container,
  LeftContainer,
  RightContainer,
  PageTitleBar,
} from '../../../../styles/community/Community_Main';
import ScrollToTopButton from '../../../ScrollToTopButton';

const Cs_Post_Read = (): JSX.Element => {
  const location = useLocation();
  const mainContentRef = useOutletContext<OutletContextType>();
  const { boardType, boardId } = useParams();
  const queryParams = new URLSearchParams(location.search);

  const page: number = Number(queryParams.get('page')) || 1;
  const size: number = Number(queryParams.get('size')) || 10;
  const sortBy: string = queryParams.get('sortBy') || 'createdAt';
  const order: string = queryParams.get('order') || 'ASC';

  // 페이지 진입 시 스크롤 위치 초기화
  useLayoutEffect(() => {
    if (mainContentRef?.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [mainContentRef]);

  const boardNameConverter: MyBoardNameConverterType = [
    { type: 'suggestion', display: '문의 게시글' },
    { type: 'report', display: '신고 게시글' },
  ];

  const boardDisplayName =
    boardNameConverter.find((item) => item.type === boardType)?.display || boardType;

  // // Get Post from Backend
  // useLayoutEffect(() => {
  //   const readPost = async (): Promise<void> => {
  //     try {
  //       const data: PostRequest = { id: Number(boardId) };
  //       const response = await MyPageApi.getPost(data);
  //       setCommentCnt(response.data.commentCnt);
  //       setPost(response.data);
  //     } catch (error) {
  //       console.error('게시글 불러오는 중 오류 발생 : ', error);
  //     }
  //   };
  //   readPost();
  // }, [boardId]);

  const useReadPost = (
    pathVariable: MyReportPostRequest | MySuggestionPostRequest,
    params: MyReportCommentRequest | MySuggestionCommentRequest,
  ): {
    postData: ReportBoardDataType | SuggestionBoardDataType | null;
    commentData: MyReportCommentResponse[] | MySuggestionCommentResponse[] | null;
  } => {
    const isReport = boardType === 'report';
    const isSuggestion = boardType === 'suggestion';

    const results = useQueries({
      queries: [
        {
          queryKey: isReport ? ['myreportpost', pathVariable] : ['mysuggestionpost', pathVariable],
          queryFn: ():
            | AxiosPromise<ReportBoardDataType>
            | AxiosPromise<SuggestionBoardDataType> => {
            if (isReport) return MyPageApi.getMyReportPost(pathVariable as MyReportPostRequest);
            return MyPageApi.getMySuggestionPost(pathVariable as MySuggestionPostRequest);
          },
          enabled: (isReport || isSuggestion) && !!boardId,
        },
        {
          queryKey: isReport ? ['myreportcomment', params] : ['mysuggestioncomment', params],
          queryFn: ():
            | AxiosPromise<MyReplyResponse<MyReportCommentResponse>>
            | AxiosPromise<MyReplyResponse<MySuggestionCommentResponse>> => {
            if (isReport) return MyPageApi.getMyReportComments(params as MyReportCommentRequest);
            return MyPageApi.getMySuggestionComments(params as MySuggestionCommentRequest);
          },
          enabled: (isReport || isSuggestion) && !!boardId,
        },
      ],
    });

    const [postQuery, commentQuery] = results;

    const postData: ReportBoardDataType | SuggestionBoardDataType | null =
      postQuery.isSuccess && postQuery.data?.data ? postQuery.data.data : null;

    const commentData: MyReportCommentResponse[] | MySuggestionCommentResponse[] | null =
      commentQuery.isSuccess && commentQuery.data?.data ? commentQuery.data.data.content : null;

    return { postData, commentData };
  };

  const boardIdNumber = boardId ? Number(boardId) : undefined;

  const pathVariable = boardIdNumber
    ? boardType === 'report'
      ? (boardIdNumber as MyReportPostRequest)
      : boardType === 'suggestion'
        ? (boardIdNumber as MySuggestionPostRequest)
        : undefined
    : undefined;

  const params = boardIdNumber
    ? boardType === 'report'
      ? ({ reportId: boardIdNumber, page, size, sortBy, order } as MyReportCommentRequest)
      : boardType === 'suggestion'
        ? ({ suggestionId: boardIdNumber, page, size, sortBy, order } as MySuggestionCommentRequest)
        : undefined
    : undefined;

  const { postData, commentData } = useReadPost(
    pathVariable as MyReportPostRequest | MySuggestionPostRequest,
    params as MyReportCommentRequest | MySuggestionCommentRequest,
  );

  if (!postData || !commentData) {
    return <p>초기 로딩 중...</p>;
  }

  return (
    <>
      <Wrap>
        <Container>
          <LeftContainer>
            <Cs_Post_UserProfile />
          </LeftContainer>
          <RightContainer>
            {/* 커뮤니티로 이동 기능? */}
            <PageTitleBar>{boardDisplayName}</PageTitleBar>
            {/* 실제 게시글 정보 불러오기는 여기서 */}
            <Cs_Post_MainContents postData={postData} />
            <PageTitleBar>
              {postData && 'suggestionId' in postData ? '문의글 답변' : '신고글 답변'}
            </PageTitleBar>
            <Cs_Post_ReplyArea commentData={commentData} />
          </RightContainer>
        </Container>
        <ScrollToTopButton />
      </Wrap>
    </>
  );
};

export default Cs_Post_Read;
