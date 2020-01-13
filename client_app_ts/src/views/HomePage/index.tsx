import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Container, Table, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../components/layout/Header";
import Search from "../../components/layout/Search";
import Checkbox from "../../components/snippet/Checkbox";
import ModalConfirm from '../../components/snippet/ModalConfirm';
import { initCheckTypeUrl } from "../../utils/utils";
import * as Types from "../../constants/notify/fetch";
import { actFetchNotify, actDeleteNotify } from "../../actions/notify/fetch";
import Loading from "../../components/snippet/Loading";
import Snackbar from '../../components/snippet/Snackbar';
interface Props {
  error: boolean;
  loading: boolean;
  message: string;
  list_notify: Types.notiFetch[];
  appFetchListNotify: () => void;
  appDeleteListNotify: (list: any[]) => void;
  appResetStateNotify: () => void;
}
const HomePage: React.FC<Props> = props => {
  const { error, loading, message, list_notify, appFetchListNotify, appDeleteListNotify, appResetStateNotify } = props;
  const [stMessage, setMessage] = useState<string>(message);
  let [stListNotify, setListNotify] = useState<Types.notiFetch[]>(list_notify);
  let [count, setCount] = useState<number>(0);
  let [checkAll, setCheckAll] = useState<boolean>(false);
  let [arrItemRemove, setArrItemRemove] = useState<any[]>([]);
  let [showModal, setShowModal] = useState<boolean>(false);
  const initRenderListNotify = (list: Types.notiFetch[]) => {
    if (loading && list.length === 0)
      return (
        <tr>
          <td colSpan={6}>
            <Loading />
          </td>
        </tr>
      );
    if (error && stMessage !== "")
      return (
        <tr>
          <td colSpan={6}>
            <Alert className="pageAlert mt-0" variant="danger">
              {stMessage}
            </Alert>
          </td>
        </tr>
      );
    if (!list || list.length === 0)
      return (
        <tr>
          <td colSpan={6}>
            <p className="emptyData">Hiện tại chưa có thông báo nào...</p>
          </td>
        </tr>
      );
    let result = null;
    result = list.map((item: Types.notiFetch) => {
      return (
        <tr key={item._id}>
          <td>
            <Checkbox
              chkId={`chk-${item._id}`}
              chkDefault={item.checked ? true : false}
              initHandleCheckboxEvent={initHandleCheckboxEvent}
            />
          </td>
          <td className="icon">
            {item.notifyIcon && item.notifyIcon !== '' ? (
              <img src={item.notifyIcon} alt={item.notifyName} />
            ) : (
              <img
                src={require("../../images/no-image.png")}
                alt={item.notifyName}
              />
            )}
          </td>
          <td>{item.notifyName}</td>
          <td className="notifyStatus">
            <span className={`ic ${item.notifyStatus === 'true' ? "on" : "off"}`}></span>
            <span> {item.notifyStatus === 'true' ? "Bật" : "Tắt"}</span>
          </td>
          <td>{item.notifyType}</td>
          <td>
            {item.notifyCreateTime
              ? item.notifyCreateTime
              : new Date().toLocaleDateString()}
          </td>
          <td>
            <Link to={`/edit/${item._id}`} title="Sửa thông báo">
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path d="M18.303,4.742l-1.454-1.455c-0.171-0.171-0.475-0.171-0.646,0l-3.061,3.064H2.019c-0.251,0-0.457,0.205-0.457,0.456v9.578c0,0.251,0.206,0.456,0.457,0.456h13.683c0.252,0,0.457-0.205,0.457-0.456V7.533l2.144-2.146C18.481,5.208,18.483,4.917,18.303,4.742 M15.258,15.929H2.476V7.263h9.754L9.695,9.792c-0.057,0.057-0.101,0.13-0.119,0.212L9.18,11.36h-3.98c-0.251,0-0.457,0.205-0.457,0.456c0,0.253,0.205,0.456,0.457,0.456h4.336c0.023,0,0.899,0.02,1.498-0.127c0.312-0.077,0.55-0.137,0.55-0.137c0.08-0.018,0.155-0.059,0.212-0.118l3.463-3.443V15.929z M11.241,11.156l-1.078,0.267l0.267-1.076l6.097-6.091l0.808,0.808L11.241,11.156z"></path>
              </svg>
            </Link>
          </td>
          <td>
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                initRemoveNotify(item._id);
              }}
              title="Xóa thông báo"
            >
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"></path>
              </svg>
            </a>
          </td>
        </tr>
      );
    });
    return result;
  };
  const initHandleCheckboxEvent = (event: any) => {
    var { type, value } = event;
    setCheckAll(false);
    switch (type) {
      case "addAll":
        setCount(stListNotify.length);
        setCheckedListNotify(true);
        setCheckAll(true);
        break;
      case "addItem":
        setCount(count + 1);
        stListNotify[findItemInList(value)].checked = true;
        if (count === stListNotify.length - 1) setCheckAll(true);
        break;
      case "removeAll":
        setCheckedListNotify(false);
        setCount(0);
        break;
      case "removeItem":
        stListNotify[findItemInList(value)].checked = false;
        setCount(count - 1);
        break;
    }
  };
  const findItemInList = (id: string) => {
    let ind = stListNotify.findIndex(item => {
      return id.indexOf(item._id) !== -1;
    });
    return ind;
  };
  const setCheckedListNotify = (checked: boolean) => {
    return stListNotify.map(item => {
      return item.checked = checked;
    });
  };
  const initRemoveNotify = (id: string) => {
    var array: any[] = [];
    if (!Array.isArray(id)) array.push({_id: id});
    else array = id;
    setArrItemRemove(array);
    setShowModal(true);
  };
  const initConfirmActionFromProps = (confirm: boolean) => {
    if(confirm){
      appDeleteListNotify(arrItemRemove);
    }
    else
      setShowModal(confirm);
  }
  useEffect(() => {
    appFetchListNotify();
    return () => {
      appResetStateNotify();
    }
  }, []);

  useEffect(() => {
    setListNotify(list_notify);
    setMessage(message);
  }, [list_notify, message]);

  useEffect(() => {
    setShowModal(false);
  }, [list_notify]);
  return (
    <div className="homePage">
      <Header type="view" title="Quản lý thông báo" />
      <Snackbar message={stMessage} error={error} />
      <ModalConfirm toggleModal={showModal} loading={loading} confirmActionFromProps={initConfirmActionFromProps}/>
      <Container fluid={true}>
        <div className="boxContent">
          <Search />
          <div className="listNotification mt-3">
            <Table className="tableNotify" responsive>
              <thead>
                <tr>
                  <th>
                    {list_notify ? (
                      <>
                        <Checkbox
                          chkId="chkAll"
                          chkDefault={checkAll}
                          initHandleCheckboxEvent={initHandleCheckboxEvent}
                        />
                        <div
                          className={`chkAllDropdown ${
                            count > 0 ? "open" : ""
                          }`}
                        >
                          <ul className="list">
                            <li>Đã chọn {count} thông báo</li>
                            <li>
                              <a href="#">Xóa {count} thông báo đã chọn</a>
                            </li>
                          </ul>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </th>
                  <th></th>
                  <th>Tên thông báo</th>
                  <th>Trạng thái</th>
                  <th>Loại thông báo</th>
                  <th>Thời gian tạo</th>
                </tr>
              </thead>
              <tbody>{initRenderListNotify(stListNotify)}</tbody>
            </Table>
          </div>
        </div>
      </Container>
    </div>
  );
};
const mapStateToProps = (state: Types.fetchNotiApp) => {
  return {
    loading: state.fetch.loading,
    error: state.fetch.error,
    message: state.fetch.message,
    list_notify: state.fetch.list_notify
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    appFetchListNotify: () => dispatch(actFetchNotify()),
    appDeleteListNotify: (list: string[]) => dispatch(actDeleteNotify(list)),
    appResetStateNotify: () => dispatch({type: Types.FETCH_RESET_STATE})
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
