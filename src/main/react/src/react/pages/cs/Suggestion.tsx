import { JSX, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import Select, { MultiValue } from 'react-select';

import CS_WriteEditor_Suggestion from './components/CS_WriteEditor_Suggestion';
import { SelectOption } from './CsType';
import { customStyles } from './CustomStyles';
import { useAppSelector } from '../../../redux/hooks/reduxHooks';
import {
  WriteWrap,
  WriteContainer,
  WriteTagBox,
  WriteTitle,
  WriteTitleBox,
  PageTitleBar,
} from '../../styles/cs/CS';

const Suggestion = (): JSX.Element => {
  const [title, setTitle] = useState<string>('');
  const navigate = useNavigate();

  const [selectedSuggestions, setSelectedSuggestions] = useState<string[]>([]);
  const suggestOptions: SelectOption[] = [
    { value: 'FEATURE_REQUEST', label: '기능 개선' },
    { value: 'PERFORMANCE_ISSUE', label: '성능 이슈' },
    { value: 'CONTENT_SUGGESTION', label: '콘텐츠 제안' },
    { value: 'POLICIES', label: '약관 관련' },
    { value: 'DEBUG', label: '버그' },
    { value: 'ETC', label: '기타' },
  ];

  const handleChange = (newValue: MultiValue<SelectOption>): void => {
    setSelectedSuggestions(newValue.map((option) => option.value));
  };

  const auth = useAppSelector((state) => state.auth.nickname);

  const [dialogOpen, setDialogOpen] = useState(false); // 다이얼로그 상태 관리
  const handleLoginRedirect = (): void | Promise<void> => {
    navigate('/login'); // 로그인 페이지로 리다이렉트
  };

  const handleDialogClose = (): void => {
    setDialogOpen(false);
    navigate(-1);
  };

  useEffect(() => {
    if (auth === '') {
      setDialogOpen(true);
    } else return;
  }, [auth]);

  return (
    <>
      <WriteWrap>
        <WriteContainer>
          <PageTitleBar>데볼트에 문의하기</PageTitleBar>
          <WriteTitleBox>
            <WriteTitle
              autoComplete="off"
              placeholder="제목을 입력하세요."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </WriteTitleBox>
          <WriteTagBox>
            <Select
              options={suggestOptions}
              isMulti
              onChange={handleChange}
              placeholder="태그를 설정하세요."
              styles={customStyles}
            />
          </WriteTagBox>
          <CS_WriteEditor_Suggestion title={title} suggestion={selectedSuggestions} />
        </WriteContainer>
      </WriteWrap>
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
          로그인이 필요한 서비스입니다.
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'right' }}>
          <Button sx={{ fontFamily: 'bold' }} color="secondary" onClick={handleDialogClose}>
            취소
          </Button>
          <Button sx={{ fontFamily: 'bold' }} color="secondary" onClick={handleLoginRedirect}>
            로그인
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Suggestion;
