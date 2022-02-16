import { makeStyles } from '@material-ui/styles';
import {alpha} from "@material-ui/core";


export const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    marginLeft:theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  site_logo_mobile:{
    display:"block",
    marginRight:15,
    paddingTop:5,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      display:"none",
    },
  },
  site_logo:{
    display:"none",
    marginTop: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      marginLeft: -20,
      display:"block",
    },
  },
  buttons_top: {
    position: 'relative',
    marginLeft:15,
    flexDirection:"column",
    color:"#fff",
    marginTop: theme.spacing(1.5),
    paddingTop:0,
  },
  Icon: {
    position: 'relative',
    flexDirection:"row",
    marginRight: theme.spacing(2),
    marginTop:5,
    paddingLeft:5,
    paddingRight:5,
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',

    },
  },
}));
