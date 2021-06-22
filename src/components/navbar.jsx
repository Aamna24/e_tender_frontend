import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import SubjectIcon from "@material-ui/icons/Subject";
import GavelIcon from "@material-ui/icons/Gavel";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  link: {
    //color: "white",
    color:"black",
    paddingRight: "14px",
    flexGrow: 1,
    marginTop: "50px",
    lineHeight: "2.9rem",
  },

  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },

  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function NavBar({ user }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <div className="card" style={{ width: "15rem" }}>
        <div className="card-body text-center">
          <AccountCircle id="profileCard" />
          <h5 className="card-title text-center">{user}</h5>

          <div className="row mb-2">
            <div className="col-md-6">
              <Link to="/my-tenders" onClick={handleMenuClose}>
                <SubjectIcon />
                <br />
                My Tenders
              </Link>
            </div>
            <div className="col-md-6">
              <Link to="/my-bids" onClick={handleMenuClose}>
                <GavelIcon />
                <br />
                My Bids
              </Link>
            </div>
            
          </div>
          
          <hr className="solid"></hr>

          <div className="row">
            <div className="col-md-6">
              <div className="text-center">
                <Link to="/edit-profile">Manage Account</Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-center">
                <Link to="/logout">Sign Out</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Menu>
  );
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem>
        <Typography variant="h6">
          <Link to="/home">HOME</Link>
        </Typography>
      </MenuItem>
      <MenuItem>
        <Typography variant="h6">
          <Link to="/contact-us">CONTACT US</Link>
        </Typography>
      </MenuItem>
      <MenuItem>
        <Typography variant="h6">
          <Link to="/aboutus">ABOUT US</Link>
        </Typography>
      </MenuItem>
      <MenuItem>
        <Typography variant="h6">
          <Link to="/publish">PUBLISH TENDER</Link>
        </Typography>
      </MenuItem>
    </Menu>
  );

  return (
      <>
      {user!=='admin' && (
          <div className={classes.grow}>
          <AppBar position="static" style={{ backgroundColor: "white" }}>
            <Toolbar>
              <Typography className={classes.title} variant="h6" noWrap>
                <img src="./brand.png" alt='logo' style={{width:"12%"}}/>
              </Typography>
    
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <Typography variant="h6" className={classes.title}>
                  <Link to="/home" className={classes.link}>
                    HOME
                  </Link>
                </Typography>
                <Typography variant="h6">
                  <Link to="/aboutus" className={classes.link}>
                    ABOUT US
                  </Link>
                </Typography>
                <Typography variant="h6">
                  <Link to="/search" className={classes.link}>
                    SEARCH
                  </Link>
                </Typography>
                <Typography variant="h6">
                  <Link to="/publish" className={classes.link}>
                    PUBLISH TENDER
                  </Link>
                </Typography>
                <Typography variant="h6">
                  <Link to="/contact-us" className={classes.link}>
                    CONTACT US
                  </Link>
                </Typography>
                {!user && (
                  <div className={classes.grow}>
                    <div className={classes.sectionDesktop}>
                      <Typography variant="h6">
                        <Link to="/login" className={classes.link}>
                          LOGIN
                        </Link>
                      </Typography>
                      <Typography variant="h6">
                        <Link to="/register" className={classes.link}>
                          SIGNUP
                        </Link>
                      </Typography>
                    </div>
                  </div>
                )}
    
                {user && (
                  <div>
                    {" "}
                    <IconButton
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                      color="inherit"
                    >
                      <AccountCircle style={{fill:"black"}} />
                    </IconButton>
                  </div>
                )}
              </div>
              <div className={classes.sectionMobile}>
                <Typography style={{}} variant="h6" noWrap>
                  E-Tender
                </Typography>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          {renderMobileMenu}
          {renderMenu}
        </div>
      )}
      </>
  );
}
