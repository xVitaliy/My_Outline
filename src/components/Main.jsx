import React, {} from 'react';
import { Container, Link } from "@mui/material";
import UsersStartPage from "./Users/UsersStartPage";
import { Route, Routes } from "react-router-dom";
import StartPage from "./StartPage";
import FormikPage from "./Formik/FormikPage";
import UsersPaginator from "./UsersPaginator/UsersPaginator";
import UsersScrollPaginator from "./UsersGridPaginator/UsersScrollPaginator";

const Main = () => {
    return (
        <div>
            <Container maxWidth={ 'xl' }>
                <Routes>
                    <Route path={ '/' } element={ <StartPage /> } />
                    <Route path={ '/users' } element={ <UsersStartPage /> } />
                    <Route path={ '/formik' } element={ <FormikPage /> } />
                    <Route path={ '/usersPaginator' } element={ <UsersPaginator /> } />
                    <Route path={ '/usersScrollPaginator' } element={ <UsersScrollPaginator /> } />
                </Routes>
            </Container>
        </div>
    );
};

export default Main;
