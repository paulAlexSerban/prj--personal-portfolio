import { useId } from "react";
import PropTypes from "prop-types";
import {
	FaGithub,
	FaLinkedin,
	FaCodepen,
	FaHackerrank,
	FaTwitter,
	FaInstagram,
	FaMediumM,
	FaMastodon,
	FaNodeJs,
	FaDocker,
	FaGlobe,
	FaFolderOpen,
} from "react-icons/fa";
import {
	SiCodewars,
	SiTryhackme,
	SiHackthebox,
	SiJavascript,
	SiReact,
	SiAmazonaws,
} from "react-icons/si";
import { GrMail, GrLinkedinOption, GrDocumentText } from "react-icons/gr";

export default function Icon({
	iconName = "github",
	classNames = [],
	...rest
}) {
	const ID = useId();
	const classes = classNames.join(" ");

	const icon = {
		codepen: <FaCodepen title="CodePen" />,
		codewars: <SiCodewars title="Codewars" />,
		github: <FaGithub title="GitHub" />,
		hackerrank: <FaHackerrank title="HackerRank" />,
		linkedin: <FaLinkedin title="LinkedIn" />,
		tryhackme: <SiTryhackme title="TryHackMe" />,
		hackthebox: <SiHackthebox title="Hack The Box" />,
		twitter: <FaTwitter title="Twitter" />,
		instagram: <FaInstagram title="Instagram" />,
		mastodon: <FaMastodon title="Mastodon" />,
		medium: <FaMediumM title="Medium" />,
		javascript: <SiJavascript title="JavaScript" />,
		reactjs: <SiReact title="React" />,
		nodejs: <FaNodeJs title="Node.js" />,
		docker: <FaDocker title="Docker" />,
		aws: <SiAmazonaws title="Amazon Web Services" />,
		linkedin_v2: <GrLinkedinOption title="LinkedIn" />,
		email: <GrMail title="Email" />,
		document: <GrDocumentText title="Document" />,
		globe: <FaGlobe title="Globe" />,
		folder: <FaFolderOpen title="Folder" />,
	};

	const selectedIcon = icon[iconName] || <FaGlobe title="Globe" />;

	return (
		<span className={classes} id={ID} {...rest}>
			{selectedIcon}
		</span>
	);
}

Icon.propTypes = {
	iconName: PropTypes.string.isRequired,
	classNames: PropTypes.array,
};
