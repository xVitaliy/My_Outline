import React, {} from 'react';
import { Box, Container, Link } from "@mui/material";
import UsersStartPage from "./Users/UsersStartPage";
import { Route, Routes } from "react-router-dom";
import StartPage from "./StartPage";
import FormikPage from "./Formik/FormikPage";
import UsersPaginator from "./UsersPaginator/UsersPaginator";
import UsersScrollPaginator from "./UsersGridPaginator/UsersScrollPaginator";
import Algorithms from "./Algorithms/Algorithms";
import Ary from "./Ary/Ary";

const Main = () => {
    return (
        <Box>
            <Container maxWidth={ 'xl' }>
                <Routes>
                    <Route path={ '/' } element={ <StartPage /> } />
                    <Route path={ '/users' } element={ <UsersStartPage /> } />
                    <Route path={ '/formik' } element={ <FormikPage /> } />
                    <Route path={ '/usersPaginator' } element={ <UsersPaginator /> } />
                    <Route path={ '/usersScrollPaginator' } element={ <UsersScrollPaginator /> } />
                    <Route path={ '/algorithms' } element={ <Algorithms /> } />
                    <Route path={ '/ary' } element={ <Ary /> } />
                </Routes>
            </Container>
        </Box>
    );
};

export default Main;
