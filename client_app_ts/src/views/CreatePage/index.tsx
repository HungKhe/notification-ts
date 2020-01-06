import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import Header from "../../components/layout/Header";
import FormPage from "../../components/layout/FormPage";
import { actCreateNotify } from "../../actions/notify/create";
import * as Types from "../../constants/notify/create";
interface Props {
  error: boolean;
  loading: boolean;
  message: string;
  appActCreateNotify?: (noti: any) => void;
}
const Create: React.FC<Props> = props => {
  const { error, loading, message, appActCreateNotify } = props;
  const appCreateNotify = (noti: any) => {
    console.log('noti: ', noti)
  }
  return (
    <div className="createNotifyPage">
      <Header type="create" title="Thêm mới thông báo" />
      <Container fluid={true}>
        <div className="boxContent">
          <FormPage loading={loading} appCreateNotify={appCreateNotify}/>
        </div>
      </Container>
    </div>
  );
};
const mapStateToProps = (state: Types.createNotiApp) => {
  return {
    loading: state.create.loading,
    error: state.create.error,
    message: state.create.message
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    appActCreateNotify: (noti: any) => dispatch(actCreateNotify(noti))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Create);
