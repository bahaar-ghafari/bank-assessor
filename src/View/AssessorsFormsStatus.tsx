import React, { ReactElement, useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiskAssessment } from '../redux/RiskAssessment/action';
import { IApplicationState } from '../store/state';
import CustomTable from '../components/Tables/CustomTable';
import NoData from '../components/Nodata.tsx/NoData';
import Loading from '../components/Loading/Loading';
import { Box, makeStyles } from '@material-ui/core';
import CustomButton from '../utils/buttons/Button';
import DeleteModal from '../components/Dialogs/DeleteModal';
import EditAsseessorModal from './components/EditAsseessorModal';

interface IDataType {
  title: string;
  bankName: string;
  startDate: string;
  deadlineDate: string;
}
export default function ApprovedGeneralAssessmentResults(): ReactElement {
  const [showEditModal, setshowEditModal] = useState(false);
  const [showdeleteModal, setshowdeleteModal] = useState(false);
  const [Assessors, setAssessors] = useState({
    title: '',
    bankName: '',
    startDate: '',
    deadlineDate: '',
  });

  const dispatch = useDispatch();
  useEffect(() => {
    // effect
    dispatch(RiskAssessment());
  }, []);

  const currentRiskAssessment = useSelector((state: IApplicationState) => state.riskAssessment);

  const useStyles = makeStyles((theme) => ({
    submit: {
      margin: theme.spacing(0, 1, 0),
    },
  }));
  const classes = useStyles();

  const handleChange = (name: string, value: string) => {
    setAssessors({ ...Assessors, [name]: value });
  };
  const handleSubmit = () => {};

  const renderAction = (data: IDataType) => {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <CustomButton
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
          label="ویرایش"
          onClickFunction={() => handleEdit(data)}
        />
        <CustomButton
          type="submit"
          variant="contained"
          color="secondary"
          className={classes.submit}
          label="حذف"
          onClickFunction={handleDelete}
        />
      </Box>
    );
  };
  const handleEdit = (data: IDataType) => {
    setAssessors(data);
    setshowEditModal(true);
  };
  const handleDelete = () => {
    setshowdeleteModal(true);
  };
  const columns = [
    {
      label: 'عنوان',
      value: 'title',
    },
    {
      label: 'نام بانک',
      value: 'bankName',
    },
    {
      label: 'زمان شروع',
      value: 'startDate',
    },
    {
      label: 'زمان پایان',
      value: 'deadlineDate',
    },
    {
      label: 'عملیات',
      value: 'action',
    },
  ];
  const list = currentRiskAssessment?.data?.filter((item) => item.status === 'CREATED');
  const rows =
    list &&
    list.map((item) => {
      return { ...item, action: renderAction(item) };
    });
  return (
    <>
      {list && list.length ? (
        <CustomTable rows={rows} columns={columns} hasAsction={true} />
      ) : (
        <NoData />
      )}
      {showEditModal && (
        <EditAsseessorModal
          open={showEditModal}
          onClose={() => setshowEditModal(false)}
          Assessors={Assessors}
          onHandleChange={handleChange}
          onHandleSubmit={handleSubmit}
        />
      )}
      {showdeleteModal && (
        <DeleteModal open={showdeleteModal} onClose={() => setshowdeleteModal(false)} />
      )}
      {currentRiskAssessment?.loading && <Loading />}
    </>
  );
}
