import { useMemo } from 'react';

import { useNavigate } from 'react-router-dom';

import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import type {
  MyBoardResponse,
  MySuggestionBoardRequest,
  SuggestionBoardDataType,
} from '../../../../../../api/AxiosApi/MyPageApi/MyPageApiTypes';
import type { MyPageSuggestionProps } from '../../../MyPageType';

import MyPageApi from '../../../../../../api/AxiosApi/MyPageApi/MyPageApi';
import { useAppSelector } from '../../../../../../redux/hooks/reduxHooks';
import {
  PostEach,
  PostListContainer,
  PostTop,
  PostTopUser,
  PostTopUserId,
  PostTopUserImg,
  PostTopDays,
  PostMiddle,
  PostMiddleContentsTitle,
  PostMiddleContentsText,
  PostBottom,
  PostMiddleContentsUpper,
  PostMiddleContentsSolved,
  PostMiddleContentsPending,
  PostBottomTagsBox,
  PostBottomTag,
} from '../../../../../styles/community/Community_Board';
import Board_Pagination from '../../../../community/components/common/board/Board_Pagination';
import { SuggestionDisplayNames } from '../Cs_DisplayNames';

const Board_PostList_MyPage_Suggestion: React.FC<MyPageSuggestionProps> = ({
  page,
  size,
  status,
  onPageChange,
}) => {
  const navigate = useNavigate();

  const profileUrl = useAppSelector((state) => state.auth.profile);

  // useEffect(() => {
  //   const fetchMySuggestionPosts = async (): Promise<void> => {
  //     try {
  //       const request: MySuggestionBoardRequest = {
  //         page,
  //         size,
  //         sortBy: 'createdAt',
  //         order: 'DESC',
  //         status,
  //       };

  //       const response = await MyPageApi.getMySuggestionBoard(request);
  //       setSuggestionPosts(response.data.content);
  //       setTotalPages(response.data.totalPages);
  //       console.log('문의 사항 response 타입 확인 :', response);
  //     } catch (error) {
  //       console.error('내 건의사항 게시글 불러오기 오류:', error);
  //     }
  //   };
  //   fetchMySuggestionPosts();
  // }, [page, size, status]); // ✅ status 변경 시 데이터 새로 불러오기

  const useMySuggestionBoardData = (
    params: MySuggestionBoardRequest,
  ): UseQueryResult<AxiosResponse<MyBoardResponse<SuggestionBoardDataType>>, Error> => {
    return useQuery({
      queryKey: ['mysuggestionboard', params],
      queryFn: MyPageApi.getMySuggestionBoardQuery,
      enabled: !!params,
    });
  };

  const param: MySuggestionBoardRequest = useMemo(
    () => ({
      page,
      size,
      sortBy: 'createdAt',
      order: 'DESC',
      status,
    }),
    [page, size, status],
  );

  const { data, error } = useMySuggestionBoardData(param);

  if (error) console.error('내 문의 게시글 불러오기 오류', error);

  // HTML 태그 제거 함수
  const getTextFromHTML = (html: string): string => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  const handlePostClick = (post: SuggestionBoardDataType): void => {
    navigate(`/mypage/suggestion/post/${post.suggestionId}`);
  };

  return (
    <>
      <PostListContainer>
        {Array.isArray(data?.data.content) && data.data.content.length > 0 ? (
          data?.data.content.map((post) => (
            <PostEach
              key={post.suggestionId}
              style={{ cursor: 'pointer' }}
              onClick={() => handlePostClick(post)}
            >
              <PostTop>
                <PostTopUser>
                  <PostTopUserImg
                    style={{
                      backgroundImage: `url(${profileUrl ?? '/images/general/default_profile.png'})`,
                    }}
                  />
                  <PostTopUserId>{post.name ?? '알 수 없음'}</PostTopUserId>
                </PostTopUser>
                <PostTopDays>
                  {new Date(post.createdAt).toISOString().slice(0, 10).replace(/-/g, '.')} 작성
                </PostTopDays>
              </PostTop>
              <PostMiddle>
                <PostMiddleContentsUpper>
                  {post.status === 'INACTIVE' ? (
                    <PostMiddleContentsSolved>해결됨</PostMiddleContentsSolved>
                  ) : (
                    <PostMiddleContentsPending>미해결</PostMiddleContentsPending>
                  )}
                  <PostMiddleContentsTitle>{post.title}</PostMiddleContentsTitle>
                </PostMiddleContentsUpper>
                <PostMiddleContentsText>
                  {getTextFromHTML(post.content ?? '내용 없음').length > 100
                    ? getTextFromHTML(post.content).slice(0, 100) + '...'
                    : getTextFromHTML(post.content)}
                </PostMiddleContentsText>
              </PostMiddle>
              <PostBottom>
                {Array.isArray(post.suggestion) &&
                  post.suggestion.some((item) => item.trim() !== '') && (
                    <PostBottomTagsBox>
                      {post.suggestion && post.suggestion.length > 0
                        ? post.suggestion.map((lang, index) => (
                            <PostBottomTag>{SuggestionDisplayNames[lang]}</PostBottomTag>
                          ))
                        : null}
                    </PostBottomTagsBox>
                  )}
              </PostBottom>
            </PostEach>
          ))
        ) : (
          <div
            style={{
              width: '100%',
              color: 'var(--devolt-white)',
              fontFamily: 'bold',
              padding: '30px',
              textAlign: 'center',
              fontSize: '14px',
            }}
          >
            작성한 건의사항이 없습니다.
          </div>
        )}
      </PostListContainer>

      <Board_Pagination
        currentPage={page}
        totalPages={data?.data.totalPages ?? 1}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default Board_PostList_MyPage_Suggestion;
