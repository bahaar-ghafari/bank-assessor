import React, {ReactElement, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import NoData from '../../components/Nodata.tsx/NoData';
import {RiskAssessment} from '../../redux/RiskAssessment/action';
import {IApplicationState} from '../../store/state';
import {GetRiskAssessmentComponent} from '../../redux/RiskAssessmentComponent/action';
import FullResponsedChart from "./FullresponsedChart";

export default function GetAssessmentReport(): ReactElement {
  const currentRiskAssessmentComponent = useSelector(
    (state: IApplicationState) => state.riskAssessmentComponent,
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const pathhistry = 'getReport';
  const assID = parseInt(history.location.pathname.split('/')[2]);

  useEffect(() => {
    dispatch(RiskAssessment());
    dispatch(GetRiskAssessmentComponent(history, pathhistry, assID));
  }, []);

  const list = currentRiskAssessmentComponent?.data;
  const assessorItemsData = list?.map((item) => {
    return {
      key: 'پاسخ بانک',
      value: item.bankAssessmentResponse,
      key2: 'پاسخ ارزیاب عمومی',
      value2: item.generalAssessmentResponse,
      title: item.title,
      qbody: item.questionBody
    };
  });
  return (
    <>
      {list && list.length ? (
          <FullResponsedChart data={assessorItemsData} renderAction={false} />
      ) : (
        <NoData />
      )}
    </>
  );
}
