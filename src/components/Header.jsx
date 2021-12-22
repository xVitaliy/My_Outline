import React from 'react';
import { AppBar, Button, Container, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ setOpen }) => {

    return (
        <AppBar position={ "static" }>
            <Container maxWidth={ "xl" }>
                <Toolbar sx={ { justifyContent: 'space-between' } }>
                    <IconButton
                        onClick={ () => setOpen(true) }
                        sx={ {
                            edge: 'start',
                            mr: 2,
                            color: 'inherit'
                        } }>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant={ 'h5' } component={ "div" }>
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