export type SelectOption = {
  value: string;
  label: string;
};

export type CSWriteEditorSuggestionProps = {
  title: string;
  suggestion: string[];
};

export type CSWriteEditorReportProps = {
  boardId: number;
  writerName: string;
  boardTitle: string;
  boardUrl: string;
  title: string;
  report: string[];
};
