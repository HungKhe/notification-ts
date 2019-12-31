import React, { Component } from 'react';
import Header from '../../components/layout/Header';
import { Container } from 'react-bootstrap';
import FormPage from '../../components/layout/FormPage';
import {RouteComponentProps} from "react-router-dom";
type TParams = { id: string };
interface Props {
    match?: any
}
const EditPage: React.FC<Props> = (props) => {
    return (
        <div className="createNotifyPage">
            <Header type="create" title="Thêm mới thông báo"/>
            <Container fluid={true}>
                <div className="boxContent">
                    <FormPage />
                </div>
            </Container>
        </div>
    );
}
export default EditPage;