import React from "react";
import {
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
import DefineNewAssessorsForms from "../../View/DefineNewAssessorsForms";
import AssessorsFormsStatus from "../../View/AssessorsFormsStatus";
import AssessorsFormsStatusPerPage from "../../View/AssessorsFormsStatusPerPage";
import CheckBankAssessorSResponse from "../../View/CheckBankAssessorSResponse";
import GetReports from "../../View/GetReports";
import NeedsCheckAssessmentForms from "../../View/NeedsCheckAssessmentForms";
import NeedsCheckAssessment from "../../View/NeedsCheckAssessment";
import ApprovedGeneralAssessmentResults from "../../View/ApprovedGeneralAssessmentResults";
import OngoingGeneralAssessment from "../../View/OngoingGeneralAssessment";
import ApprovedGeneralAssessment from "../../View/ApprovedGeneralAssessment";
import OngoingAssessment from "../../View/OngoingAssessment";
import NeedsCorrectionAssessment from "../../View/NeedsCorrectionAssessment";
import ApprovedAssessment from "../../View/ApprovedAssessment";
import NotFoundComponent from "../../View/NotFoundComponent";
function PrivateRout() {
  return (
    <Switch>
      <Route
        path="/BankAssessorsResponse/:id"
        component={AssessorsFormsStatusPerPage}
      />
      {/* risk_management_assessor_sideBarItems */}
      <Route
        replace
        path="/DefineNewAssessorsForms"
        component={DefineNewAssessorsForms}
      />
      <Route
        replace
        path="/CheckBankAssessorSResponse"
        component={CheckBankAssessorSResponse}
      />
      <Route replace path="/GetReports" component={GetReports} />
      {/*  committee_sideBarItems*/}
      <Route
        replace
        path="/NeedsCheckAssessmentForms"
        component={NeedsCheckAssessmentForms}
      />
      <Route
        replace
        path="/NeedsCheckAssessment"
        component={NeedsCheckAssessment}
      />
      <Route
        replace
        path="/approvedGeneralAssessmentResults"
        component={ApprovedGeneralAssessmentResults}
      />
      {/* general_assessor_sideBarItems */}
      <Route
        replace
        path="/OngoingGeneralAssessment"
        component={OngoingGeneralAssessment}
      />
      <Route
        replace
        path="/approvedGeneralAssessment"
        component={ApprovedGeneralAssessment}
      />
      {/* bank_sideBarItems */}
      <Route replace path="/OngoingAssessment" component={OngoingAssessment} />
      <Route
        replace
        path="/NeedsCorrectionAssessment"
        component={NeedsCorrectionAssessment}
      />
      <Route
        replace
        path="/approvedAssessment"
        component={ApprovedAssessment}
      />
      <Route replace path="/NotFoundComponent" component={NotFoundComponent} />
      <Route
        replace
        path="/AssessorsFormsStatus"
        component={AssessorsFormsStatus}
      />
    </Switch>
  );
}

export default PrivateRout;
