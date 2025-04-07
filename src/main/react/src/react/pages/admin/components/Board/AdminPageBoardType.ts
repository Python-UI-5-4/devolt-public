import {
  MyReportCommentResponse,
  MySuggestionCommentResponse,
  ReportBoardDataType,
  SuggestionBoardDataType,
} from '../../../../../api/AxiosApi/MyPageApi/MyPageApiTypes';

export type OutletContextType = React.RefObject<HTMLDivElement>;

export type MyBoardNameConverterType = {
  type: string;
  display: string;
}[];

export type CSPostUserProfileProps = {
  postCnt: number;
};

export type CSPostMainContentProps = {
  postData: ReportBoardDataType | SuggestionBoardDataType | null;
};

export type CSPostReplyProps = {
  commentData: MyReportCommentResponse[] | MySuggestionCommentResponse[] | null;
};
