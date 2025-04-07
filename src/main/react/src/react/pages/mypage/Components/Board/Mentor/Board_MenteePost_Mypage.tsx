import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useSelector } from 'react-redux';

import MentorApi from '../../../../../../api/AxiosApi/mentorApi/MentorApi';
import {
  PostBottomDot,
  PostEach,
  PostListContainer,
  PostMiddle,
  PostMiddleContentsText,
  PostMiddleContentsTitle,
  PostMiddleContentsUpper,
  PostTop,
  PostTopUser,
  PostTopUserId,
  PostTopUserImg,
} from '../../../../../styles/community/Community_Board';
import {
  BoardMentorListMyPageProps,
  MentorApiResponse,
  MentoringListItem,
} from '../../../MyPageType';

// Redux 상태 타입 (auth 슬라이스의 구조에 따라 조정 필요)
interface RootState {
  auth: {
    keynumber: number;
  };
}

const Board_MenteePost_MyPage: React.FC<BoardMentorListMyPageProps> = ({
  page,
  size,
  onPageChange,
}) => {
  const navigate = useNavigate();
  const [myPostData, setMyPostData] = useState<MentoringListItem[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);

  const userKey = useSelector((state: RootState) => state.auth.keynumber);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const handleDialogClose = (): void => {
    setDialogOpen(false);
  };

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = (await MentorApi.myMentoringPost(
          userKey,
          page,
          size,
        )) as MentorApiResponse;
        console.log(response.data.mentoringListItemBox);
        setMyPostData(response.data.mentoringListItemBox || []);
        setTotalPages(response.data.totalPages || 1);
      } catch (error) {
        setDialogMessage(
          error instanceof Error ? error.message : '멘티 데이터를 불러오는 데 실패했습니다.',
        );
        setDialogOpen(true);
      }
    };

    fetchData();
  }, [page, size, userKey]);

  const mentorModalDetailMove = (mentoringId: number): void => {
    navigate(`/community/mentor?mentor_id=${mentoringId.toString()}&modalType=detail`);
  };

  return (
    <>
      <PostListContainer style={{ marginBottom: '0' }}>
        {myPostData.length > 0 ? (
          myPostData.map((myPost) => (
            <PostEach
              style={{ cursor: 'pointer' }}
              key={myPost.mentoringId}
              onClick={() => {
                mentorModalDetailMove(myPost.mentoringId);
              }}
            >
              <PostTop style={{ paddingBottom: '0' }}>
                <PostTopUser>
                  <PostTopUserImg
                    style={{
                      backgroundImage: `url(${myPost.mentoringProfileUrl ?? '/images/general/default_profile.png'})`,
                    }}
                  />
                  <PostTopUserId>
                    {myPost.mentoringNickname} ({myPost.mentoringEmail})
                  </PostTopUserId>
                </PostTopUser>
              </PostTop>
              <PostTop style={{ paddingTop: '0', marginBottom: '5px' }}>
                <PostTopUser>
                  <PostTopUserId>{myPost.mentoringPosition}</PostTopUserId>
                  <PostBottomDot />
                  <PostTopUserId>{myPost.mentoringCareer}</PostTopUserId>
                  <PostBottomDot />
                  <PostTopUserId>
                    {myPost.mentoringHour}시간 / {myPost.mentoringPrice}원
                  </PostTopUserId>
                  <PostTopUserId>{myPost.mentoringPrice}원</PostTopUserId>
                  <PostBottomDot />
                  <PostTopUserId>평점 {myPost.mentoringRating.toFixed(1)}</PostTopUserId>
                </PostTopUser>
              </PostTop>

              <PostMiddle>
                <PostMiddleContentsUpper>
                  <PostMiddleContentsTitle>{myPost.mentoringTitle}</PostMiddleContentsTitle>
                </PostMiddleContentsUpper>
                <PostMiddleContentsText
                  dangerouslySetInnerHTML={{ __html: myPost.mentoringContent }}
                />
              </PostMiddle>
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
            멘티가 없습니다.
          </div>
        )}
      </PostListContainer>
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        PaperProps={{
          sx: {
            fontFamily: 'regular',
            minWidth: '400px', // 최소 가로 너비 설정
            maxWidth: '500px', // 최대 가로 너비 설정
          },
        }}
      >
        <DialogTitle
          sx={{
            textAlign: 'center',
            backgroundImage: 'url(/images/logo/fulllogo_white.png)',
            backgroundSize: '25%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left',
            margin: '10px 0 30px 13px', // 여백 추가
            padding: '13px 0',
          }}
        />
        <DialogContent
          sx={{
            fontFamily: 'bold',
            fontSize: '14px',
            textAlign: 'center', // 가로 정렬
            display: 'flex',
            justifyContent: 'center', // 세로 정렬
            alignItems: 'center', // 세로 정렬
          }}
        >
          {dialogMessage}
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'right' }}>
          <Button sx={{ fontFamily: 'bold' }} color="secondary" onClick={handleDialogClose}>
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Board_MenteePost_MyPage;
