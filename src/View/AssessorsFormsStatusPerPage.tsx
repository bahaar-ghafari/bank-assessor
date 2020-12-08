import { Box, makeStyles } from '@material-ui/core';
import React, { ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DeleteModal from '../components/Dialogs/DeleteModal';
import Loading from '../components/Loading/Loading';
import { RiskAssessment, DeleteRiskAssessment } from '../redux/RiskAssessment/action';
import { CreateRiskAssessmentComponent } from '../redux/RiskAssessmentComponent/action';
import CustomButton from '../utils/buttons/Button';
import CreateAsseessorComponentModal from './components/CreateAsseessorComponentModal';

interface Props {}
interface IDataType {
  id: number;
  title: string;
  bankAssessmentResponse: string;
  generalAssessmentResponse: string;
}
export default function AssessorsFormsStatusPerPage({}: Props): ReactElement {
  const [showdeleteModal, setshowdeleteModal] = useState(false);
  const [showCreateModal, setshowCreateModal] = useState(false);
  const [Assessors, setAssessors] = useState({
    id: 0,
    title: '',
    bankAssessmentResponse: '',
    generalAssessmentResponse: '',
  });
  const useStyles = makeStyles((theme) => ({
    submit: {
      margin: theme.spacing(0, 1, 0),
    },
  }));
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

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
    const assID = history.location.pathname.split('/')[2];
    dispatch(CreateRiskAssessmentComponent(Assessors.title, parseInt(assID)));
    setshowCreateModal(false);
  };
  return (
    <>
      <Box>
        <CustomButton
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
          label="افزودن مولفه ارزیابی"
          onClickFunction={() => setshowCreateModal(true)}
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
      {/* {currentRiskAssessment?.loading && <Loading />} */}
    </>
  );
}
