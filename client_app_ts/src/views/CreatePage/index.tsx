import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import Header from "../../components/layout/Header";
import FormPage from "../../components/layout/FormPage";
import { actCreateNotify } from "../../actions/notify/create";
import * as Types from "../../constants/notify/create";
interface Props {
  error: boolean;
  loading: boolean;
  message: string;
  history: any;
  appActCreateNotify: (noti: Types.notiPost) => void;
  appActResetStateNotify: () => void;
}
const Create: React.FC<Props> = props => {
  const { error, loading, message, appActCreateNotify, history, appActResetStateNotify } = props;
  const [stMessage, setMessage] = useState<string>(message);
  const getNotiFromProps = (noti: any) => {
    appActCreateNotify(noti);
  }
  useEffect(() => {
    setMessage(message);
    if(!error && message.toLowerCase().indexOf('thành công') > -1){
      history.push('/');
    }
    return () => {
      appActResetStateNotify();
    };
  }, [error, message]);
  return (
    <div className="createNotifyPage">
      <Header type="create" title="Thêm mới thông báo" />
      <Container fluid={true}>
        <div className="boxContent">
          <FormPage loading={loading} message={stMessage} error={error} getNotiFromProps={getNotiFromProps}/>
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
    appActCreateNotify: (noti: Types.notiPost) => dispatch(actCreateNotify(noti)),
    appActResetStateNotify: () => dispatch({ type: Types.CREATE_RESET_STATE })
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Create));
