import React, {} from 'react';
import { Container, Link } from "@mui/material";
import UsersStartPage from "./Users/UsersStartPage";
import { Route, Routes } from "react-router-dom";
import StartPage from "./StartPage";
import FormikPage from "./Formik/FormikPage";

const Main = () => {


    return (
        <div>
            <Container maxWidth={ 'xl' }>
                <Routes>
                    <Route path={ '/' } element={ <StartPage /> } />
                    <Route path={ '/users' } element={ <UsersStartPage /> } />
                    <Route path={ '/formik' } element={ <FormikPage /> } />
                </Routes>
            </Container>
        </div>
    );
};

export default Main;
