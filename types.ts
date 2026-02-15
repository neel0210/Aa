/**
 * Enum for CELPIP Writing Task Types
 */
export enum TaskType {
  TASK_1 = 'Task 1: Writing an Email',
  TASK_2 = 'Task 2: Responding to Survey Questions',
}

/**
 * Interface for a single CELPIP Writing Question.
 * Updated to include difficulty levels for UI categorization.
 */
export interface Question {
  id: string;
  type: TaskType;
  /** Difficulty level used for Dashboard sectioning */
  difficulty: 'Easy' | 'Medium' | 'Hard'; 
  title: string;
  prompt: string;
  /** Specific requirements for Task 1: Email */
  bullets?: string[]; 
  /** Choice descriptions for Task 2: Survey */
  options?: {
    optionA: string;
    optionB: string;
  };
}

/**
 * Interface for the AI-generated evaluation result
 */
export interface EvaluationResult {
  bandScore: number;
  contentScore: number;
  vocabularyScore: number;
  grammarScore: number;
  taskFulfillmentScore: number;
  feedback: string;
  strengths: string[];
  weaknesses: string[];
  /** A Band 12 version of the user's input for learning */
  correctedVersion: string;
}

/**
 * Interface to track a user's practice session history
 */
export interface TestSession {
  questionId: string;
  userResponse: string;
  timeSpentSeconds: number;
  date: string;
  evaluation?: EvaluationResult;
}