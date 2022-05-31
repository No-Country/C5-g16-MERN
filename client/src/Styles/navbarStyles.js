import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({



nav: {
    backgroundColor: "#CCE9CD",
    padding: "20px",
    display:' flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0px',
    [theme.breakpoints.down("sm")]: {
       paddingBottom: "0px",

    },
},

navul: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    listStyle:'none',
    textDecoration:'none'
},

title: {
    fontSize: '40px',
    [theme.breakpoints.down("md")]: {
        fontSize: "20px",
       
},
},

subtitle: {
    fontSize:"20px",

    [theme.breakpoints.down("sm")]: {
        display:"none"
},

[theme.breakpoints.down("md")]: {
    fontSize: '14px',
},
},
miniSub:{
    display: "none",
    [theme.breakpoints.down("sm")]: {
        display:"flex",
        flexDirection: "row",
        fontSize:'12px',
        backgroundColor: '#CCE9CD',
        margin: '0px',
        padding:'3px',
        justifyContent: "center",

}},
}));


        
export default useStyles