import React from 'react'
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

import useStyles from './styles';


const NavBar = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const isAuthenticated = true;
  
  return (
    <>
      <AppBar position='fixed'>
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton 
            className='{classes.menuButton}'
            color='inherit' 
            edge='start' 
            style={{outline: 'none'}}
            onClick={ ()=> {}}>
              <Menu />
            </IconButton>
          )}

          <IconButton color='inherit' sx={{ ml: 1}} onClick={() => {}}>
            { theme.palette.mode === 'dark'? <Brightness7/> : <Brightness4/>}
          </IconButton>

          {!isMobile && 'Search...'}

          <div>
            {!isAuthenticated ? (
              <Button color='inherit' onClick={() => {}}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button 
                className={classes.linkButton}
                color='inherit' 
                component= {Link}
                to={'/profile/:id'}
                onClick={() => {}}>
                  {!isMobile && <>My Movies &nbsp;</>}
                  <Avatar style={{width: 30 , height: 30}}
                  alt="profile"
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"/>
                </Button>
            )}
          </div>

          {isMobile && 'Search...'}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar