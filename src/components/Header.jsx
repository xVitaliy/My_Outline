import React from 'react';
import { AppBar, Button, Container, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { DataArray } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const Header = ({ setOpen }) => {

    return (
        <AppBar position={ "static" }>
            <Container maxWidth={ "xl" }>
                <Toolbar>
                    <IconButton
                        onClick={ () => setOpen(true) }
                        sx={ {
                            edge: 'start',
                            mr: 2,
                            color: 'inherit'
                        } }>
                        <MenuIcon />
                    </IconButton>
                    <NavLink to={ 'ary' } style={ { color: ' orange' } }>
                        <DataArray />
                    </NavLink>
                    <Typography sx={ { flexGrow: 1, textAlign: 'center' } }
                                variant={ 'h5' }
                                component={ "div" }
                    >
                        Todos GQL
                    </Typography>

                    <Button size={ "large" } variant={ "contained" }
                            color={ "secondary" }>Login</Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;