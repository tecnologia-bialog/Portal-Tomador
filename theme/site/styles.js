import { makeStyles } from '@material-ui/styles'
import { red, blue } from '@material-ui/core/colors';
const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(8),
  },
  blog_root: {
    paddingTop: theme.spacing(10),
    background: 'linear-gradient(to  bottom, #102027 70%, #e9eff5 30%)',
    height: "100vh"
  },
  blog_container: {
    paddingLeft: theme.spacing(2),
  },
  link_breadcrumbs_blog: {
    textDecoration: 'none',
    color: "#fafafa"
  },
  blog_media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  title_blog: {
    lineHeight: 1,
    fontSize: '2.5em',
    fontWeight: 700,
    letterSpacing: "-0.15625re",
    color: "#183444",
  },
  resumo_blog: {
    width: "100%",
    lineHeight: 1.4,
    fontSize: '1.3em',
    color: "#333333",
  },
  blog_avatar: {
    backgroundColor: blue[500],
    height: 32,
    width: 32
  },
  link: {
    textDecoration: 'none',
    color: "#666"
  },
  loginContent: {
    paddingTop: theme.spacing(10),
  },
  searchContent: {
    paddingTop: theme.spacing(9),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(9),
    },
  },
  hide: {
    display: 'none',
  },
  root_tabs: {
    marginTop: theme.spacing(7),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  root_tabs_dashboard: {
    marginTop: theme.spacing(7),
    background: '#fafafa',
  },
  root_tickets: {
    marginTop: theme.spacing(7),
    background: '#fafafa',
    //height: "100vh",
  },
  root_chat: {
    marginTop: theme.spacing(7),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(8),
    },
  },
  root_signin_steps: {
    marginTop: theme.spacing(7),
    backgroundColor: "#fff",
  },
  dashboard_content: {
    backgroundColor: "#e9eff5",
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
  },
  root_signin_forms: {
    marginTop: theme.spacing(4),
  },
  rootListSkills: {
    marginTop: theme.spacing(1),
  },
  profile_root: {
    paddingTop: theme.spacing(10),
    background: 'linear-gradient(to  bottom, rgb(0, 54, 72) 40%,#fafafa 10%, #e9eff5  50%)',
    //height: "100vh"
  },
  profile_root_tab: {
    paddingTop: theme.spacing(1),
    background: 'linear-gradient(to  bottom, rgb(0, 54, 72) 40%,#fafafa 10%, #fafafa  50%)',
    height: "100vh"
  },

  box_profile: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: 'rgb(230, 230, 230)',
    background: 'rgb(255, 255, 255)',
    justifyContent: 'center',
    alignContent: 'center',
    minHeight: 200
  },
  border_right: {
    borderRightWidth: 1,
    borderRightStyle: "solid",
    borderRightColor: '#fff',
  },
  box_profile_border_right: {
    borderRightWidth: 1,
    borderRightStyle: "solid",
    borderRightColor: 'rgb(230, 230, 230)',
    background: 'rgb(255, 255, 255)',
    justifyContent: 'center',
    alignContent: 'center',
  },
  box_profile_border_bottom: {
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: 'rgb(230, 230, 230)',
    borderBottomImage: "initial",
    background: 'rgb(255, 255, 255)',
    justifyContent: 'center',
    alignContent: 'center',
  },
  box_profile_border_top: {
    borderTopWidth: 1,
    borderTopStyle: "solid",
    borderTopColor: 'rgb(230, 230, 230)',
    background: 'rgb(255, 255, 255)',
    justifyContent: 'center',
    alignContent: 'center',
  },
  box_profile_padding: {
    padding: 10,
  },

  form_white: {
    backgroundColor: "#fff",
  },

  icon: {
    marginRight: theme.spacing(2),
  },
  Content_404: {
    marginTop: theme.spacing(10),
    display: 'flex',
    height: "80%",
    textAlign: "center"
  },
  card_profile: {
    height: '100%',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },

  card_404: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(10),
    padding: 10
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  avatar_portfolio: {
    alignSelf: "center",
    width: 120,
    height: 120,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textPercentComissao: {
    fontSize: 160,
    color: "#00b5e2",
    fontWeight: "bold",
    lineHeight: 1.1,
    textShadow: "1px 1px 1px #fafafa"
  },
  textComissao: {
    fontSize: 45,
    fontWeight: "bold",
    lineHeight: 1.1,
    textShadow: "1px 1px 1px #fafafa"
  },
  textHowWorkTitle: {
    fontSize: 28,
    color: "#00b5e2",
    fontWeight: "bold",
    lineHeight: 1.3,
    marginBottom: 15
  },
  textHowWork: {
    borderLeftWidth: 6,
    padding: 10,
    borderLeftStyle: "solid",
    borderLeftColor: '#00b5e2',
    marginBottom: 5

  },
  textHome: {
    fontSize: 38,
    color: "#fff",
    fontWeight: "bold",
    lineHeight: 1.3,
    textUnderlinePosition: "under",
    position: "relative",
    marginBottom: 20,
    whiteSpace: "pre-line",
    textShadow: "1px 1px 2px #263238",
    [theme.breakpoints.up('md')]: {
      fontSize: 50,
    },
  },
  BusinesstextHome: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    lineHeight: 1.3,
    position: "relative",
    marginBottom: 10,
    whiteSpace: "pre-line",
    textShadow: "1px 1px 1px black",
    [theme.breakpoints.up('md')]: {
      fontSize: 18,
    },
  },
  text_section_footer: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
    lineHeight: 1.3,
    position: "relative",
    marginBottom: 20,
    whiteSpace: "pre-line",
    textShadow: "1px 1px 1px black"
  },
  text_title_box: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    //lineHeight: 1.3,
    position: "relative",
    whiteSpace: "pre-line",
    // textShadow:"1px 1px 1px black"
  },
  text_num_box: {
    fontSize: 35,
    color: "#fafafa",
    fontWeight: "bold",
    lineHeight: 1.3,
    position: "relative",
    whiteSpace: "pre-line",
    textShadow: "1px 1px 1px #fafafa"
  },

  box_resumo: {
    padding: 10,
    justifyContent: 'center',
    alignContent: 'center',
    [theme.breakpoints.down('sm')]: {
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
      borderBottomColor: '#fafafa',
    },
    [theme.breakpoints.up('md')]: {
      borderRightWidth: 1,
      borderRightStyle: "solid",
      borderRightColor: '#fafafa',
    },
  },

  box_resumo_last: {
    padding: 10,
    justifyContent: 'center',
    alignContent: 'center',

  },
  section_top: {
    borderTopWidth: 1,
    borderTopStyle: "solid",
    borderTopColor: '#FFF',
    padding: 24,
  },
  section_resumo: {
    padding: 0,
    background: 'linear-gradient(282deg,#006080,#006181 47%,#003648);',
    [theme.breakpoints.up('md')]: {
      borderTopWidth: 1,
      borderTopStyle: "solid",
      borderTopColor: '#fafafa',
    },
  },
  section_profile: {
    justifyContent: 'center',
    alignContent: 'center',
    padding: 24,
    backgroundColor: "#263238",
  },
  section_middle: {
    padding: 24,
    backgroundColor: "#fafafa",
  },
  section_footer: {
    padding: 24,
    justifyContent: "center",
    background: 'linear-gradient(282deg,#006080,#006181 47%,#003648);',
  },
  section_footer_call: {
    padding: 24,
    justifyContent: "center",
    //background: 'linear-gradient(282deg,#263238,#263238 47%,#000a12);',
    backgroundColor: "#000a12",
  },
  border_left_blue: {
    borderLeftWidth: 5,
    marginTop: 15,
    paddingLeft: 5,
    borderLeftStyle: "solid",
    borderLeftColor: '#00b5e2',
    justifyContent: 'center',
    alignContent: 'center',
  },
  footer: {
    backgroundColor: "#fafafa",
    color: "#fff",
    padding: theme.spacing(4),
  },
  footerLinks: {
    color: "#00b5e2",
    display: "block",
  },
  footerSubTitle: {
    color: "#fafafa",
    display: "block"
  },

  scroll_list: {
    overflowY: "auto",
    listStyle: "none",
    height: "100%",
    '&::-webkit-scrollbar': {
      width: '0.4em'
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    }
  },
  newOfferRoot: {
    paddingLeft: theme.typography.pxToRem(24),
    paddingRight: theme.typography.pxToRem(24),
    paddingBottom: theme.typography.pxToRem(24),
  },
  newOfferTitle: {
    color: '#7F7F7F',
    borderBottom: '1px solid #e2e2e2',
    lineHeight: theme.typography.pxToRem(72),
    marginBottom: theme.typography.pxToRem(24),
    fontWeight: theme.typography.fontWeightLight
  },
  newOfferInputLabel: {
    color: '#7F7F7F',
    fontWeight: theme.typography.fontWeightRegular,
    lineHeight: theme.typography.pxToRem(48)
  },
  linearStepperRoot: {
    width: "100%",
  },
  stepLabelText: {
    color: '#AAAAAA',
  },
  stepLabelTextActive: {
    color: '#555555 !important',
  },
  iconStep: {
    color: '#d7d7d7',
  },
  stepperIconText: {
    color: 'white'
  },
  stepperIconActive: {
    color: '#f6a200 !important'
  },
  stepperIconCompleted: {
  },
  showStepperRoot: {
    width: "100%",
    margin: 0,
    height: 480,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  cargaOriginContainer: {
    direction: "column-reverse"
  }
}));
