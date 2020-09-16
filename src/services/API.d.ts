declare namespace API {
  export interface QuestionnaireData {
    id: string;
    name?: string;
    questions?: Object[{
      required: boolean;
    }];
    description?: string;
  }
}
