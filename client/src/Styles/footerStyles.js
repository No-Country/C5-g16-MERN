import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	footerContainer: {
		backgroundColor: "#CCE9CD",
    	borderTop: 'solid 1px #dfdfdf',
		width: '100%',
		paddingTop: "30px",
	/* 	position: 'absolute',
		bottom: 0, */
		
	},

	footer: {
		display: "flex",
		justifyContent: "space-evenly",
		flexDirection: "column",
		alignItems: "center",
		[theme.breakpoints.up("sm")]: {
			flexDirection: "row",
		},
	},
	logoContainer: {
		display: "flex",
		alignItems: "center",
	},
	logoText: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block",
		},
	},
	footerList: {
		listStyle: "none",
		padding: "0",
		textAlign: "center",
		display: 'flex',
    	gap: '28px',
	},
	linkItemFooterList: {
		textDecoration: "none",
		color: '#000'
	},
	footerListTitle: {
		textDecoration: "underline",
		fontWeight: "500",
	},
	itemsContainer: {
		display: "flex",
		justifyContent: "space-evenly",
		width: "50%",

		flexDirection: "column",
		alignItems: "center",

		[theme.breakpoints.up("sm")]: {
			flexDirection: "row",
			alignItems: "flex-start",
		},
	},

	socialMediaItem: {
		backgroundColor: '#fff',
		borderRadius: '32px',
		width: '50px',
		height: '50px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	socialMediaList: {
		display: 'flex',
		justifyContent: 'center',
	},
	socialMediaLinkItem: {
		textDecoration: 'none',
	}
}));

export default useStyles;
