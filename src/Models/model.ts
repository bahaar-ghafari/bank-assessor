export interface assesmentModel {
  bankName: string;
  deadlineDate: string;
  id: number;
  startDate: string;
  status:
    | 'CREATED'
    | 'SUBMITTED'
    | 'APPROVED_BY_COMMITTEE'
    | 'DECLINED_BY_COMMITTEE'
    | 'STARTED'
    | 'BANK_ASSESSED'
    | 'BANK_ASSESSMENT_APPROVED'
    | 'BANK_ASSESSMENT_NOT_APPROVED'
    | 'GENERAL_ASSESSED'
    | 'GENERAL_ASSESSMENT_APPROVED'
    | 'GENERAL_ASSESSMENT_NOT_APPROVED'
    | 'FINISHED';
  title: string;
}
export interface assesmentComponentModel {
  id: number;
  title: string;
  bankAssessmentResponse: string;
  generalAssessmentResponse: string;
}
