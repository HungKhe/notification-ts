import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Header from "../../components/layout/Header";
import { Container, Alert } from "react-bootstrap";
import * as Types from "../../constants/notify/edit";
import { actEditFetchNotify, actEditNotify } from "../../actions/notify/edit";
import FormPage from "../../components/layout/FormPage";
import Loading from "../../components/snippet/Loading";
interface Props {
  route: any;
  error: boolean;
  loading: boolean;
  message: string;
  notify: Types.notiEdit[];
  appEditFetchNotify: (id: string) => void;
  appEditNotify: (noti: Types.notiEdit) => void;
}
const EditPage: React.FC<Props> = props => {
  const {
    route,
    error,
    message,
    loading,
    notify,
    appEditFetchNotify,
    appEditNotify
  } = props;
  const [stMessage, setMessage] = useState<string>(message);
  const getNotiFromProps = (noti: Types.notiEdit) => {
    console.log(noti);
    appEditNotify(noti);
  }
  console.log('ffffmess: ', message)
  useEffect(() => {
    const { match } = route;
    const { id } = match.params;
    if (id) appEditFetchNotify(id);
  }, []);

  useEffect(() => {
    setMessage(message);
    console.log('mess: ', message)
    if(message.toLowerCase() === 'chỉnh sửa thành công!')
      route.history.push('/');
    return () => {}
  }, [message]);
  return (
    <div className="createNotifyPage">
      <Header type="edit" title="Chỉnh sửa thông báo" />
      <Container fluid={true}>
        <div className="boxContent">
            {
                loading && notify.length === 0 ? <Loading />
                : notify.length > 0 ? <FormPage loading={loading} message={stMessage} error={error} fields={notify[0]} getNotiFromProps={getNotiFromProps} />
                : <Alert className="pageAlert" variant="danger">
                    {stMessage}
                </Alert>
            }
          
        </div>
      </Container>
    </div>
  );
};
const mapStateToProps = (state: Types.editNotiApp) => {
  return {
    loading: state.edit.loading,
    error: state.edit.error,
    message: state.edit.message,
    notify: state.edit.notify
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    appEditFetchNotify: (id: string) => dispatch(actEditFetchNotify(id)),
    appEditNotify: (noti: Types.notiEdit) => dispatch(actEditNotify(noti))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditPage);
