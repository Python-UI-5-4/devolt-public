import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useTheme } from '@mui/material';

import Write_Suggestion_Reply from './Write_Suggestion_Reply';
import { useAppSelector } from '../../../../../../redux/hooks/reduxHooks';
import {
  ReplyContainer,
  SuggestBox,
  ReplyList,
  ReplyEach,
  ReplyUserProfileBox,
  ReplyUserId,
  ReplyUserProfileTextBox,
  ReplyMiddle,
  ReplyMiddleText,
  EditorBox,
  ReplyEachTopBox,
  ReplyMoreButtonArea,
  ReplyMoreButton,
} from '../../../../../styles/community/Community_Post';
import Board_Pagination from '../../../../community/components/common/board/Board_Pagination';
import { SuggestionReplyAreaProps } from '../../../AdminType';

const Suggestion_ReplyArea: React.FC<SuggestionReplyAreaProps> = ({ commentData }) => {
  const [editorOpen, setEditorOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages] = useState<number>(1);
  const navigate = useNavigate();
  const theme = useTheme();

  // paging handler
  const handlePageChange = (page: number): void => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Reply Editor Open
  const handleBoxClick = (): void => {
    if (!editorOpen) {
      setEditorOpen(true); // 클릭 시 에디터 열기
    }
  };

  // Reply Editor Close
  const handleCloseEditor = (): void => {
    setEditorOpen(false);
  };

  const nickname = useAppSelector((state) => state.auth.nickname);

  return (
    <>
      <ReplyContainer>
        <SuggestBox
          expanded={editorOpen}
          onClick={nickname ? handleBoxClick : (): void | Promise<void> => navigate('/login')}
        >
          <span style={{ marginLeft: '15px', cursor: 'pointer' }}>
            📝
            {nickname
              ? ` ${nickname}님, 이 글에 대한 답변을 남겨 주세요!`
              : ' 로그인하고 이 글에 대한 의견을 남겨 주세요!'}
          </span>
          {editorOpen ? (
            <EditorBox expanded={editorOpen}>
              <Write_Suggestion_Reply handleCloseEditor={handleCloseEditor} />
            </EditorBox>
          ) : null}
        </SuggestBox>
        {Array.isArray(commentData) && commentData.length > 0 ? (
          <ReplyList>
            {commentData.map((reply, index) => (
              <ReplyEach key={index}>
                <ReplyEachTopBox>
                  <ReplyUserProfileBox>
                    <ReplyUserProfileTextBox>
                      <ReplyUserId>{reply.name}</ReplyUserId>
                    </ReplyUserProfileTextBox>
                  </ReplyUserProfileBox>
                  <ReplyMoreButtonArea>
                    <ReplyMoreButton theme={theme.palette.mode} />
                  </ReplyMoreButtonArea>
                </ReplyEachTopBox>
                <ReplyMiddle>
                  <ReplyMiddleText dangerouslySetInnerHTML={{ __html: reply.content }} />
                </ReplyMiddle>
              </ReplyEach>
            ))}
          </ReplyList>
        ) : null}
        {totalPages > 1 && (
          <Board_Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </ReplyContainer>
    </>
  );
};

export default Suggestion_ReplyArea;
