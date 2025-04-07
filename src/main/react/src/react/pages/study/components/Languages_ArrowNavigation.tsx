import React, { useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

import { CPlusStudyChapter } from '../../../../util/study/CPlusStudyChapter';
import { CStudyChapter } from '../../../../util/study/CStudyChapter';
import { JavaScriptStudyChapter } from '../../../../util/study/JavaScriptStudyChapter';
import { JavaStudyChapter } from '../../../../util/study/JavaStudyChapter';
import { PythonStudyChapter } from '../../../../util/study/PythonStudyChapter';
import {} from '../../../styles/study/Study_Components';
import {
  ArrowItems,
  ArrowLeftPC,
  ArrowRightPC,
  ArrowText,
  ArrowLink,
} from '../../../styles/study/Study_Main';
import { ChapterType, LanguageArrowProps } from '../StudyType';

const Languages_ArrowNavigation: React.FC<LanguageArrowProps> = ({ direction, language }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  const handleDialogClose = (): void => {
    setDialogOpen(false);
  };

  // 언어에 맞는 챕터 데이터 선택
  const getChapterData = (): ChapterType[] => {
    switch (language?.toLowerCase()) {
      case 'java':
        return JavaStudyChapter;
      case 'c':
        return CStudyChapter;
      case 'cplus':
        return CPlusStudyChapter;
      case 'javascript':
        return JavaScriptStudyChapter;
      case 'python':
        return PythonStudyChapter;
      default:
        setDialogMessage('지원하지 않는 언어입니다.');
        setDialogOpen(true);
        return [];
    }
  };

  const chapterData = getChapterData();

  // 현재 경로의 chapterId와 contentIndex 추출
  const currentPath = location.pathname.split('/');
  const currentChapterId = currentPath[3] || '';
  const currentContentIndex = currentPath[4] ? parseInt(currentPath[4], 10) - 1 : -1;

  // 현재 챕터와 콘텐츠 찾기
  const currentChapter = chapterData.find((chapter) => chapter.id === currentChapterId);
  const currentContent = currentChapter?.contents?.[currentContentIndex as number];

  if (!currentChapter || !currentContent) {
    setDialogMessage('유효하지 않은 경로입니다.');
    setDialogOpen(true);
    return null;
  }

  const handleNavigation = (): void => {
    let nextContent;
    let nextNavigatePath; // 다음 navigatepath를 위한 변수
    if (direction === 'left') {
      if (currentContentIndex === 0) {
        // 첫 번째 콘텐츠인 경우, 이전 챕터의 마지막 콘텐츠로 이동
        const previousChapterIndex =
          chapterData.findIndex((chapter) => chapter.id === currentChapterId) - 1;
        const previousChapter = chapterData[previousChapterIndex as number];
        if (previousChapter) {
          nextContent = previousChapter.contents[previousChapter.contents.length - 1];
          nextNavigatePath = nextContent.navigatepath; // 이전 챕터의 마지막 콘텐츠로 이동
        } else {
          setDialogMessage('이전 챕터가 없습니다.');
          setDialogOpen(true);
          return;
        }
      } else {
        // 이전 콘텐츠로 이동
        const nextContentIndex = currentContentIndex - 1;
        nextContent = currentChapter.contents[nextContentIndex as number];
        nextNavigatePath = nextContent.navigatepath;
      }
    } else if (direction === 'right') {
      const nextContentIndex = currentContentIndex + 1;
      // 현재 챕터의 마지막 콘텐츠인 경우, 다음 챕터로 이동
      if (nextContentIndex >= currentChapter.contents.length) {
        const nextChapterIndex =
          chapterData.findIndex((chapter) => chapter.id === currentChapterId) + 1;
        const nextChapter = chapterData[nextChapterIndex as number];

        if (nextChapter) {
          nextContent = nextChapter.contents[0]; // 다음 챕터의 첫 번째 콘텐츠로 이동
          nextNavigatePath = nextContent.navigatepath;
        } else {
          setDialogMessage('다음 챕터가 없습니다.');
          setDialogOpen(true);
          return;
        }
      } else {
        nextContent = currentChapter.contents[nextContentIndex as number];
        nextNavigatePath = nextContent.navigatepath;
      }
    }
    if (nextNavigatePath) {
      navigate(nextNavigatePath);
    } else {
      setDialogMessage('다음 콘텐츠를 찾을 수 없습니다.');
      setDialogOpen(true);
    }
  };

  return (
    <>
      <ArrowLink onClick={handleNavigation}>
        {/* {direction === 'left' ? <LeftArrow /> : <RightArrow />} */}
        {direction === 'left' ? (
          <ArrowLeftPC>
            <ArrowItems>
              <ArrowCircleLeftIcon />
              <ArrowText>이전 과정</ArrowText>
            </ArrowItems>
          </ArrowLeftPC>
        ) : (
          <ArrowRightPC>
            <ArrowItems>
              <ArrowCircleRightIcon />
              <ArrowText>다음 과정</ArrowText>
            </ArrowItems>
          </ArrowRightPC>
        )}
      </ArrowLink>
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

export default React.memo(Languages_ArrowNavigation);
