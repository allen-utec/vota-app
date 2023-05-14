export interface IPoll {
  id: number;
  code: string;
  alternatives: IAlternative[];
  question: string;
  user_id: number;
}

export interface IAlternative {
  id: number;
  text: string;
}
