import { Box, makeStyles } from '@material-ui/core';
import React, { ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DeleteModal from '../components/Dialogs/DeleteModal';
import Loading from '../components/Loading/Loading';
import NoData from '../components/Nodata.tsx/NoData';
import AssessorItemsTable from '../components/Tables/AssessorItemsTable';
import { DeleteRiskAssessment, RiskAssessment } from '../redux/RiskAssessment/action';
import { SetRiskAssessmentApprove } from '../redux/RiskAssessmentApproveDenied/action';
import { CreateRiskAssessmentComponent } from '../redux/RiskAssessmentComponent/action';
import { IApplicationState } from '../store/state';
import CustomButton from '../utils/buttons/Button';
import CreateAsseessorComponentModal from './components/CreateAsseessorComponentModal';

interface IDataType {
  id: number;
  title: string;
  bankAssessmentResponse: string;
  generalAssessmentResponse: string;
}
export default function AssessorsFormsStatusPerPage(): ReactElement {
  const [showdeleteModal, setshowdeleteModal] = useState(false);
  const [showCreateModal, setshowCreateModal] = useState(false);
  const [Assessors, setAssessors] = useState({
    id: 0,
    title: '',
    bankAssessmentResponse: '',
    generalAssessmentResponse: '',
  });

  const currentRiskAssessment = useSelector(
    (state: IApplicationState) => state.riskAssessment?.data,
  );

  const currentRiskAssessmentComponent = useSelector(
    (state: IApplicationState) => state.riskAssessmentComponent,
  );

  const useStyles = makeStyles((theme) => ({
    submit: {
      margin: theme.spacing(0, 1, 0),
    },
  }));
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(RiskAssessment());
  }, []);

  const assID = parseInt(history.location.pathname.split('/')[2]);
  const currentRiskAssessmentStatus =
    currentRiskAssessment && currentRiskAssessment.find((item) => item.id === assID)?.status;
  const renderAction = (data: IDataType) => {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <CustomButton
          type="submit"
          variant="contained"
          color="secondary"
          label="حذف"
          onClickFunction={() => handleDelete(data)}
        />
      </Box>
    );
  };
  const columns = [
    {
      label: 'عنوان',
      value: 'title',
    },
    {
      label: 'پاسخ ارزیابان بانک',
      value: 'bankAssessmentResponse',
    },
    {
      label: 'پاسخ ارزیابان عمومی ',
      value: 'generalAssessmentResponse',
    },
    {
      label: 'عملیات',
      value: 'actions',
    },
  ];
  const list = currentRiskAssessmentComponent?.data;
  const rows =
    currentRiskAssessmentStatus === 'CREATED'
      ? list &&
        list.map((item) => {
          return { ...item, action: renderAction(item) };
        })
      : list;

  const handleDelete = (data: IDataType) => {
    setshowdeleteModal(true);
    setAssessors(data);
  };
  const deleteAssessment = () => {
    dispatch(DeleteRiskAssessment(Assessors.id));
  };
  const handleChange = (name: string, value: string) => {
    setAssessors({ ...Assessors, [name]: value });
  };
  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    dispatch(CreateRiskAssessmentComponent(Assessors.title, assID));
    setshowCreateModal(false);
  };
  const handleApprove = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(SetRiskAssessmentApprove('general-assessed-approved', assID));
  };

  const handleDeny = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(SetRiskAssessmentApprove('general-assessed-not-approved', assID));
  };
  return (
    <>
      <Box my={4}>
        <CustomButton
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
          label="افزودن مولفه ارزیابی"
          onClickFunction={() => setshowCreateModal(true)}
        />
        <CustomButton
          type="submit"
          variant="contained"
          color="default"
          className={classes.submit}
          label="تایید مولفه های ارزیابی"
          onClickFunction={(event: React.ChangeEvent<HTMLInputElement>) => handleApprove(event)}
        />
        <CustomButton
          type="submit"
          variant="contained"
          color="secondary"
          className={classes.submit}
          label="ردکردن مولفه های ارزیابی"
          onClickFunction={(event: React.ChangeEvent<HTMLInputElement>) => handleDeny(event)}
        />
      </Box>
      {showCreateModal && (
        <CreateAsseessorComponentModal
          open={showCreateModal}
          onClose={() => setshowCreateModal(false)}
          title={Assessors.title}
          onHandleChange={handleChange}
          onHandleSubmit={handleSubmit}
        />
      )}
      {showdeleteModal && (
        <DeleteModal
          open={showdeleteModal}
          onClose={() => setshowdeleteModal(false)}
          deleteFunc={deleteAssessment}
        />
      )}
      {rows && rows.length ? (
        <AssessorItemsTable rows={rows} columns={columns} hasAsction={true} />
      ) : (
        <NoData />
      )}
      {/* {currentRiskAssessment?.loading && <Loading />} */}
    </>
  );
}
