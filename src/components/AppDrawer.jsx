import React from 'react';
import { Box, Drawer, MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";


const AppDrawer = ({ open, setOpen }) => {
    return (
        <Drawer
            onClose={ () => setOpen(false) }
            open={ open }>
            <Box
                sx={ { mt: 10, ':hover': { color: '#1976D2' } } }>


                <MenuItem sx={ { justifyContent: 'center' } }>
                    <NavLink style={ { fontSize: 32, color: 'darkblue', textDecoration: 'none' } } to={ 'users' }> Users
                    </NavLink>
                </MenuItem>

                <MenuItem sx={ { justifyContent: 'center' } }>
                    <NavLink style={ { fontSize: 32, color: 'darkblue', textDecoration: 'none' } }
                             to={ 'formik' }> Formik and yup
                    </NavLink>
                </MenuItem>

                <MenuItem sx={ { justifyContent: 'center' } }>
                    <NavLink style={ { fontSize: 32, color: 'darkblue', textDecoration: 'none' } }
                             to={ 'usersPaginator' }> Test users paginator
                    </NavLink>
                </MenuItem>

                <MenuItem sx={ { justifyContent: 'center' } }>
                    <NavLink style={ { fontSize: 32, color: 'darkblue', textDecoration: 'none' } }
                             to={ 'usersScrollPaginator' }> Test users scroll pag
                    </NavLink>
                </MenuItem>

            </Box>
        </Drawer>
    );
};

export default AppDrawer;

