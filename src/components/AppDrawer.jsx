import React from 'react';
import { Box, Drawer, Link, MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";


const AppDrawer = ({ open, setOpen }) => {
    return (
        <Drawer
            onClose={ () => setOpen(false) }
            open={ open }>
            <Box
                sx={ { mt: 10, width: 300 } }>


                <MenuItem sx={ { justifyContent: 'center' } }>
                    <NavLink style={ { fontSize: 32, color: 'darkblue', textDecoration: 'none' } } to={ 'users' }> Users
                    </NavLink>
                </MenuItem>

                <MenuItem sx={ { justifyContent: 'center' } }>
                    <NavLink style={ { fontSize: 32, color: 'darkblue', textDecoration: 'none' } }
                             to={ 'formik' }> Formik and yup
                    </NavLink>
                </MenuItem>


                {/*<NavLink to={ 'formik' }>*/ }
                {/*    <MenuItem sx={ { justifyContent: 'center' } }> FormikPage and yup </MenuItem>*/ }
                {/*</NavLink>*/ }
                {/*<NavLink to={ 'main' }>USERS</NavLink>*/ }
            </Box>
        </Drawer>
    );
};

export default AppDrawer;

