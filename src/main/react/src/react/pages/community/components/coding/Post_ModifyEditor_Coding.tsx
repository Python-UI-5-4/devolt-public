import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import Code from '@tiptap/extension-code';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { Color } from '@tiptap/extension-color';
import { Image } from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import { TextStyle } from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { all, createLowlight } from 'lowlight';
import './../../../../styles/community/PostEditor.css';

import CommunityApi from '../../../../../api/AxiosApi/CommunityApi/CommunityApi';
import { ModifyCodingPostRequest } from '../../../../../api/AxiosApi/CommunityApi/CommunityApiType';
import { useAppSelector } from '../../../../../redux/hooks/reduxHooks';
import ToolBar from '../../../../../util/ToolBar';
import {
  EditorArea,
  StyledEditorContent,
  TipTapBox,
  WriteButtonsArea,
  WriteCancelButton,
  WriteSubmitButton,
} from '../../../../styles/community/Community_Write';
import { PostModifyEditorCodingProps } from '../../CommunityType';

const lowlight = createLowlight(all);

CodeBlockLowlight.configure({
  lowlight,
});

const Post_ModifyEditor_Coding: React.FC<PostModifyEditorCodingProps> = ({
  boardId,
  content,
  title,
  language,
}) => {
  const navigate = useNavigate();
  const [boardType] = useState('coding');

  const userAuth = useAppSelector((state) => state.auth.accesstoken);

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      Color.configure({ types: [TextStyle.name] }), // TextStyle 확장과 연동
      Underline,
      Code,
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Image,
      Placeholder.configure({
        placeholder: `- 학습 관련 질문을 남겨주세요. 상세히 작성하면 더 좋아요!
- 마크다운, 단축키를 이용해서 편리하게 글을 작성할 수 있어요.
- 먼저 유사한 질문이 있었는지 검색해보세요.
- 서로 예의를 지키며 존중하는 문화를 만들어가요.
- 서비스 운영 관련 문의는 홈페이지 우측 CS 메뉴를 이용해주세요.`,
      }),
    ],
    content: '',
  });

  useEffect(() => {
    if (editor && content) {
      editor.commands.setContent(content);
    }
  }, [editor, content]);

  // cancel button
  const handleGoBack = (): void => {
    navigate(`/community/${boardType}/post/${boardId}`, {
      state: {
        id: boardType,
      },
    });
  };

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  const handleDialogClose = (): void => {
    setDialogOpen(false);
  };

  // submit button
  const handleModify = async (): Promise<void> => {
    if (userAuth === '') {
      setDialogMessage('로그인이 필요한 서비스입니다.');
      setDialogOpen(true);
      // return navigate('/login');
    }

    if (!editor?.getHTML().trim() || !title.trim()) {
      setDialogMessage('제목과 내용을 모두 입력하세요!');
      setDialogOpen(true);
      return;
    }
    try {
      const data: ModifyCodingPostRequest = {
        boardType,
        boardId: Number(boardId),
        title,
        language,
        content: editor.getHTML(),
      };

      const response = await CommunityApi.modifyCodingPost(data);
      if (response.data) {
        setDialogMessage('글이 성공적으로 수정되었습니다.');
        setDialogOpen(true);
      }
    } catch (error) {
      console.error('글 수정 실패:', error);
      setDialogMessage('글 수정에 실패했습니다. 다시 시도해주세요.');
      setDialogOpen(true);
    }
  };

  return (
    <>
      <TipTapBox>
        <EditorArea>
          <ToolBar editor={editor} />
          <StyledEditorContent editor={editor} />
        </EditorArea>
        <WriteButtonsArea>
          <WriteCancelButton onClick={handleGoBack}>취소</WriteCancelButton>
          <WriteSubmitButton onClick={handleModify}>수정</WriteSubmitButton>
        </WriteButtonsArea>
      </TipTapBox>
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
          {dialogMessage === '로그인이 필요한 서비스입니다.' ? (
            <>
              <Button sx={{ fontFamily: 'bold' }} color="secondary" onClick={handleDialogClose}>
                취소
              </Button>
              <Button
                sx={{ fontFamily: 'bold' }}
                color="secondary"
                onClick={() => navigate('/login')}
              >
                로그인
              </Button>
            </>
          ) : dialogMessage === '글이 성공적으로 수정되었습니다.' ? (
            <Button
              sx={{ fontFamily: 'bold' }}
              color="secondary"
              onClick={() => {
                navigate(`/community/${boardType}/post/${boardId}`, {
                  state: {
                    id: boardType,
                  },
                });
              }}
            >
              확인
            </Button>
          ) : (
            <Button sx={{ fontFamily: 'bold' }} color="secondary" onClick={handleDialogClose}>
              닫기
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Post_ModifyEditor_Coding;
