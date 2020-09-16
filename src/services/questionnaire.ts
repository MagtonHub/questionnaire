import request from 'umi-request';
import env from '../../config/env.config';

export async function queryQuestionnaire(identifier: string) {
  return request<API.QuestionnaireData>(`${env.apiEndpoint}/questionnaire/${identifier}`);
}
