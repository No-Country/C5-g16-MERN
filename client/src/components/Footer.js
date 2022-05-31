import React from "react";
import useStyles from "./../Styles/footerStyles";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import { NavLink } from "react-router-dom";

import Linkedin from "./../Images/linkedin.svg";
import Instagram from "./../Images/instagram.svg";
import Twitter from "./../Images/twitter.svg";
import Facebook from "./../Images/facebook.svg";

export default function Footer() {

	const navigationItemsLeft = [
		{
			name: "Actividades",
			url: "/activities",
		},
		{
			name: "Favoritas",
			url: "/favoritas",
		},
	];

	const navigationItemsRight = [
		{
			name: "Contacto",
			url: "/contacto",
		},
		{
			name: "Nosotros",
			url: "/nosotros",
		},
	];

	const socialMediaItems = [
		{
			url: "https://facebook.com",
			icon: Facebook,
		},
		{
			url: "https://linkedin.com",
			icon: Linkedin,
		},
		{
			url: "https://instagram.com",
			icon: Instagram,
		},
		{
			url: "https://twitter.com",
			icon: Twitter,
		},
	];

	const classes = useStyles();

	return (
		<div className={classes.insideContainer}>
			
			<Box className={classes.footerContainer}>
				<Container>
					<Box className={classes.footer}>
						<Box>
							<ul className={classes.footerList}>
								{navigationItemsLeft.map(({ name, url }, index) => (
									<li key={index}>
										<NavLink className={classes.linkItemFooterList} to={url}>
											{name}
										</NavLink>
									</li>
								))}
							</ul>
						</Box>
                        <h3 className={classes.logo}>La Cancha</h3>
						<Box>
							<ul className={classes.footerList}>
								{navigationItemsRight.map(({ name, url }, index) => (
									<li key={index}>
										<NavLink className={classes.linkItemFooterList} to={url}>
											{name}
										</NavLink>
									</li>
								))}
							</ul>
						</Box>
					</Box>
					<hr />
					<Box className={classes.socialMediaList}>
						<ul className={classes.footerList}>
							{socialMediaItems.map(({ url, icon }, index) => (
								<li className={classes.socialMediaItem} key={index}>
									<a href={url} target='_BLANK' className={classes.socialMediaLinkItem}>
										<Box
											src={icon}
											alt="Social Media"
											component='img'
										/>
									</a>
								</li>
							))}
						</ul>
					</Box>
				</Container>
			</Box>
		</div>
	);
}
