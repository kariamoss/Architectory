import { Problem } from "./problem";

export interface Todo {
    title: string,
    description: string,
    beginDate: Date,
    endDate: Date,
    completionPercentage: number,
    supposedCompletionPercentage: number,
    done: boolean,
    problems?: Problem[]
  }