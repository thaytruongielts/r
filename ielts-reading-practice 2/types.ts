
export interface Option {
  value: string;
  label: string;
}

export interface Question {
  id: string;
  group?: string;
  type: 'heading_matching' | 'multi_select' | 'single_choice';
  title?: string;
  instructions: string;
  questions: SubQuestion[];
  // For heading matching
  headings?: Option[];
  paragraphRange?: string;
  // For multi-select
  maxSelection?: number;
}

export interface SubQuestion {
  id: string;
  prompt: string;
  options?: Option[];
}

export type UserAnswers = {
  [key: string]: string | string[];
};

export type AnswerKey = {
  [key: string]: string | string[];
};
