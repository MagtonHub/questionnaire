import request from 'umi-request';

export async function queryQuestionnaire(identifier: string) {
  return request<API.QuestionnaireData>(`/api/questionnaire/${identifier}`);
}
