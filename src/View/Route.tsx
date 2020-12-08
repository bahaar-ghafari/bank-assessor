import React from 'react';
import {
  Switch,
  Route,
  // Redirect,
} from 'react-router-dom';
import DefineNewAssessorsForms from './DefineNewAssessorsForms';
import AssessorsFormsStatus from './AssessorsFormsStatus';
import AssessorsFormsStatusPerPage from './AssessorsFormsStatusPerPage';
import CheckBankAssessorSResponse from './CheckBankAssessorSResponse';
import GetReports from './GetReports';
import NeedsCheckAssessmentForms from './NeedsCheckAssessmentForms';
import NeedsCheckAssessment from './NeedsCheckAssessment';
import ApprovedGeneralAssessmentResults from './ApprovedGeneralAssessmentResults';
import OngoingGeneralAssessment from './OngoingGeneralAssessment';
import ApprovedGeneralAssessment from './ApprovedGeneralAssessment';
import OngoingAssessment from './OngoingAssessment';
import NeedsCorrectionAssessment from './NeedsCorrectionAssessment';
import ApprovedAssessment from './ApprovedAssessment';
import NotFoundComponent from './NotFoundComponent';
function PrivateRout() {
  return (
    <Switch>
      <Route path="/BankAssessorsResponse/:id" component={AssessorsFormsStatusPerPage} />
      {/* risk_management_assessor_sideBarItems */}
      <Route replace path="/DefineNewAssessorsForms" component={DefineNewAssessorsForms} />
      <Route replace path="/CheckBankAssessorSResponse" component={CheckBankAssessorSResponse} />
      <Route replace path="/GetReports" component={GetReports} />
      {/*  committee_sideBarItems*/}
      <Route replace path="/NeedsCheckAssessmentForms" component={NeedsCheckAssessmentForms} />
      <Route replace path="/NeedsCheckAssessment" component={NeedsCheckAssessment} />
      <Route
        replace
        path="/approvedGeneralAssessmentResults"
        component={ApprovedGeneralAssessmentResults}
      />
      {/* general_assessor_sideBarItems */}
      <Route replace path="/OngoingGeneralAssessment" component={OngoingGeneralAssessment} />
      <Route replace path="/approvedGeneralAssessment" component={ApprovedGeneralAssessment} />
      {/* bank_sideBarItems */}
      <Route replace path="/OngoingAssessment" component={OngoingAssessment} />
      <Route replace path="/NeedsCorrectionAssessment" component={NeedsCorrectionAssessment} />
      <Route replace path="/approvedAssessment" component={ApprovedAssessment} />
      <Route replace path="/NotFoundComponent" component={NotFoundComponent} />
      <Route replace path="/AssessorsFormsStatus" component={AssessorsFormsStatus} />
    </Switch>
  );
}

export default PrivateRout;
