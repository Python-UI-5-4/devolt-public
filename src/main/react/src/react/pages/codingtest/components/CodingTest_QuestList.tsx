import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

import CodingTestApi from '../../../../api/AxiosApi/CodingTestApi/CodingTestApi';
import {
  GetChallengeListRequest,
  ChallengeSummaryType,
} from '../../../../api/AxiosApi/CodingTestApi/CodingTestApiType';
import JwtDecoding from '../../../../api/JwtDecode';
import { useAppSelector } from '../../../../redux/hooks/reduxHooks';
import {
  EachClass,
  ClassHeader,
  ClassHeaderTitle,
  ClassContents,
  ClassSet,
  ClassName,
} from '../../../styles/codingtest/CodingTest_Components';
import { ChallengeGroup, Difficulty, Difficulty_levels, QuestListProps } from '../CodingTestType';

const CodingTest_QuestList: React.FC<QuestListProps> = ({ level }) => {
  const navigate = useNavigate();

  const isAuth = useAppSelector((state) => state.auth.accesstoken);
  const [dialogOpen, setDialogOpen] = useState(false); // 다이얼로그 상태 관리
  const [dialogMessage, setDialogMessage] = useState('');

  const handleLoginRedirect = (): void => {
    navigate('/login'); // 로그인 페이지로 리다이렉트
  };

  const handleDialogClose = (): void => {
    setDialogOpen(false);
  };

  const handleNavigation = (navigatepath: string): void => {
    if (isAuth === '') {
      setDialogMessage('로그인이 필요한 서비스입니다.');
      setDialogOpen(true);
      return;
    }
    navigate(navigatepath); // 클릭한 클래스에 해당하는 경로로 이동
  };

  const [challengeGroups, setChallengeGroups] = useState<ChallengeGroup | null>(null);
  const accessToken = useAppSelector((state) => state.auth.accesstoken);
  const userId = accessToken ? JwtDecoding.getFieldFromToken(accessToken, 'sub') : null;

  const isValidDifficulty = (value: string | undefined): value is Difficulty => {
    return Difficulty_levels.includes(value as Difficulty);
  };

  useEffect(() => {
    const fetchChallengeList = async (): Promise<void> => {
      const challengeListRequest: GetChallengeListRequest = {
        difficulty: isValidDifficulty(level) ? level : null,
      };
      const responseData = await CodingTestApi.getChallengeList(challengeListRequest);
      if (Array.isArray(responseData)) {
        setChallengeGroups(
          responseData.reduce((acc: ChallengeGroup, item: ChallengeSummaryType) => {
            if (!acc[item.category]) {
              acc[item.category] = [];
            }
            acc[item.category].push(item);
            return acc;
          }, {}),
        );
      }
    };

    fetchChallengeList();
  }, [level, userId]);

  if (challengeGroups === null) {
    return (
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
    );
  }

  if (Object.keys(challengeGroups).length === 0) {
    return (
      <div
        style={{
          color: 'var(--devolt-white)',
          fontFamily: 'bold',
          textAlign: 'center',
          paddingTop: '50px',
          fontSize: '14px',
        }}
      >
        데이터가 존재하지 않습니다 😓..
      </div>
    );
  }

  return (
    <>
      {challengeGroups === null
        ? 'Loading...'
        : Object.keys(challengeGroups).length === 0
          ? '데이터가 존재하지 않습니다😓..'
          : Object.entries(challengeGroups).map(([category, items], idx) => (
              <EachClass key={idx}>
                {category && category !== 'null' ? (
                  <ClassHeader>
                    <ClassHeaderTitle>{category}</ClassHeaderTitle>
                  </ClassHeader>
                ) : (
                  <></>
                )}
                <ClassContents isOpen={true}>
                  {items.map((content) => (
                    <ClassSet key={content.challengeId}>
                      <ClassName
                        onClick={() =>
                          handleNavigation(`/codingtest/${level}/${content.challengeId}`)
                        }
                      >
                        {content.title}
                      </ClassName>
                    </ClassSet>
                  ))}
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
                      <Button
                        sx={{ fontFamily: 'bold' }}
                        color="secondary"
                        onClick={handleDialogClose}
                      >
                        취소
                      </Button>
                      <Button
                        sx={{ fontFamily: 'bold' }}
                        color="secondary"
                        onClick={() => navigate('/login')}
                      >
                        로그인
                      </Button>
                    </DialogActions>
                  </Dialog>
                </ClassContents>
              </EachClass>
            ))}
    </>
  );
};

export default CodingTest_QuestList;
