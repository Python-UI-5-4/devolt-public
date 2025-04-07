import { useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import Pagination from '@mui/material/Pagination';
import Radio from '@mui/material/Radio';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { AxiosError } from 'axios';

import ExamApi from '../../../../api/AxiosApi/ExamApi/ExamApi';
import { ExamData } from '../../../../api/AxiosApi/ExamApi/ExamApiType';
import {
  EachQuest,
  ExamContainer,
  ExamContentsContainer,
  ExamHeader,
  ExamHeaderTitle,
  QuestAnswerArea,
  QuestAnswerText,
  QuestAnswerTextEachLine,
  QuestAnswerTextLeft,
  QuestAnswerTextRight,
  QuestEachExample,
  QuestEachExampleLeft,
  QuestEachExampleRight,
  QuestExamplesArea,
  QuestTitleArea,
  QuestTitleLeft,
  QuestTitleRight,
} from '../../../styles/exam/Exam_Exam';
import { AnswerVisibility, ExamListProps, SelectedAnswers } from '../ExamType';

const ITEMS_PER_PAGE = 10;

const Exam_Mock_Data: React.FC<ExamListProps> = ({ chapter, testdate }) => {
  const [examData, setExamData] = useState<ExamData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAnswerVisible, setIsAnswerVisible] = useState<AnswerVisibility>({});
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        if (!chapter) {
          throw new Error('chapter 값이 유효하지 않습니다.');
        }
        const apiFunctionName = `getMockData${chapter}`;
        if (typeof ExamApi[apiFunctionName] !== 'function') {
          throw new Error(`API 함수 ${apiFunctionName}가 존재하지 않습니다.`);
        }
        const response = await ExamApi[apiFunctionName]();
        setExamData(response);
      } catch (err) {
        const axiosError = err as AxiosError;
        console.error('API 요청 오류:', axiosError.message);
        setError(`API 요청 실패: ${axiosError.message}`);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [chapter]); // chapter 변경 시마다 실행

  useEffect(() => {
    if (examData) {
      const initialAnswerVisibility: AnswerVisibility = {};
      const initialSelectedAnswers: SelectedAnswers = {};
      // examData.data가 배열이므로 배열 순회
      examData.forEach((question: ExamData) => {
        initialAnswerVisibility[question.qnumber] = false;
        initialSelectedAnswers[question.qnumber] = '';
      });
      setIsAnswerVisible(initialAnswerVisibility);
      setSelectedAnswers(initialSelectedAnswers);
    }
  }, [examData]);

  if (loading)
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
  if (error)
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
        😓 {error}
      </div>
    );

  const handleAnswerButtonClick = (questionId: number): void => {
    setIsAnswerVisible((prev) => {
      const isClosing = prev[questionId];
      if (isClosing) {
        setSelectedAnswers((prev) => ({
          ...prev,
          [questionId]: '',
        }));
      }
      return {
        ...prev,
        [questionId]: !isClosing,
      };
    });
  };

  const handleAnswerChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    questionId: number,
  ): void => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: event.target.value,
    }));
  };

  const handleOptionClick = (optionValue: string, questionId: number): void => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: prev[questionId] === optionValue ? '' : optionValue,
    }));
  };

  const QuestAnswerButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: 'black',
    borderRadius: '0px',
    fontFamily: 'bold, sans-serif',
    fontSize: '14px',
    width: '100px', // width 설정
    minWidth: 'unset', // 기본 Button의 min-width를 제거
    borderRight: '1px solid var(--devolt-line)',
    '&:hover': {
      backgroundColor: purple[500],
    },
    '@media (max-width: 768px)': {
      fontSize: '12px', // 모바일에서는 폰트 크기를 줄임
      width: '100%',
      height: '50px',
      borderRight: 'none',
    },
  }));

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentQuests = examData ? examData.slice(startIdx, startIdx + ITEMS_PER_PAGE) : [];
  const totalPages = examData ? Math.ceil(examData.length / ITEMS_PER_PAGE) : 0;

  const mockNames: Record<string, string> = {
    '01': '소프트웨어 설계',
    '02': '소프트웨어 개발',
    '03': '데이터베이스 구축',
    '04': '프로그래밍 언어 활용',
    '05': '정보시스템 구축관리',
  };

  return (
    <ExamContainer>
      <ExamHeader>
        <ExamHeaderTitle>
          모의시험 {` > `} {chapter}. {mockNames[chapter]}
        </ExamHeaderTitle>
      </ExamHeader>
      <ExamContentsContainer>
        {currentQuests.map((mock, index) => (
          <EachQuest key={index}>
            <QuestTitleArea>
              <QuestTitleLeft>Q{mock.qnumber}.</QuestTitleLeft>
              <QuestTitleRight>
                {mock.qname1}
                <br />
                {mock.qname2 ? (
                  <img src={mock.qname2} style={{ width: '100%', height: 'auto' }} />
                ) : null}
              </QuestTitleRight>
            </QuestTitleArea>
            <QuestExamplesArea>
              {[mock.example1, mock.example2, mock.example3, mock.example4].map(
                (example, index) => (
                  <QuestEachExample key={index}>
                    <QuestEachExampleLeft>
                      <Radio
                        checked={
                          isAnswerVisible[mock.qnumber]
                            ? example === mock.answer
                            : selectedAnswers[mock.qnumber] === example
                        }
                        onChange={(e) => handleAnswerChange(e, mock.qnumber)}
                        value={example}
                        name={`radio-buttons-${mock.qnumber}`}
                        color="secondary"
                        disabled={isAnswerVisible[mock.qnumber]}
                      />
                    </QuestEachExampleLeft>
                    <QuestEachExampleRight
                      onClick={() => {
                        if (!isAnswerVisible[mock.qnumber]) {
                          // 정답 보기 상태에서는 선택지 클릭을 막음
                          handleOptionClick(example, mock.qnumber);
                        }
                      }}
                      style={{
                        color: isAnswerVisible[mock.qnumber]
                          ? example === mock.answer
                            ? 'var(--devolt-purple)' // 정답일 경우 색상
                            : selectedAnswers[mock.qnumber] === example
                              ? 'red' // 틀린 답일 경우 색상
                              : '' // 정답도 아니고 틀린 답도 아닌 경우 색상
                          : selectedAnswers[mock.qnumber] === example
                            ? 'var(--devolt-purple)' // 사용자가 선택한 답일 경우 색상 (정답일 경우 보라색)
                            : '', // 선택되지 않은 답은 기본 색상
                      }}
                    >
                      {example ? example.slice(1).trimStart() : ''}
                      {/* '내가 선택한 답' 문구 추가 */}
                      {selectedAnswers[mock.qnumber] === example && (
                        <span
                          style={{
                            marginLeft: '10px',
                            marginTop: '2px',
                            color: 'gray',
                            fontSize: '11px',
                          }}
                        >
                          (내가 선택한 답)
                        </span>
                      )}
                    </QuestEachExampleRight>
                  </QuestEachExample>
                ),
              )}
            </QuestExamplesArea>
            {selectedAnswers[mock.qnumber] ? (
              <QuestAnswerArea>
                <QuestAnswerButton onClick={() => handleAnswerButtonClick(mock.qnumber)}>
                  {isAnswerVisible[mock.qnumber] ? '정답 닫기' : '정답 보기'}
                </QuestAnswerButton>
                {isAnswerVisible[mock.qnumber] ? (
                  <QuestAnswerText>
                    <QuestAnswerTextEachLine>
                      <QuestAnswerTextLeft>채점</QuestAnswerTextLeft>
                      <QuestAnswerTextRight
                        style={{
                          color: selectedAnswers[mock.qnumber] === mock.answer ? 'green' : 'red',
                        }}
                      >
                        {selectedAnswers[mock.qnumber] === mock.answer
                          ? '맞았습니다.'
                          : '틀렸습니다.'}
                      </QuestAnswerTextRight>
                    </QuestAnswerTextEachLine>
                    <QuestAnswerTextEachLine>
                      <QuestAnswerTextLeft>정답</QuestAnswerTextLeft>
                      <QuestAnswerTextRight>
                        {mock.answer ? mock.answer.slice(1).trimStart() : ''}
                      </QuestAnswerTextRight>
                    </QuestAnswerTextEachLine>
                    <QuestAnswerTextEachLine>
                      <QuestAnswerTextLeft>설명</QuestAnswerTextLeft>
                      <QuestAnswerTextRight>{mock.explain}</QuestAnswerTextRight>
                    </QuestAnswerTextEachLine>
                  </QuestAnswerText>
                ) : null}
              </QuestAnswerArea>
            ) : null}
          </EachQuest>
        ))}
      </ExamContentsContainer>
      <Stack spacing={2} alignItems="center">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(event, value) => setCurrentPage(value)}
        />
      </Stack>
    </ExamContainer>
  );
};

export default Exam_Mock_Data;
