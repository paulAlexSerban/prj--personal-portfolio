import { useId } from "react";
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
    FaDocker
} from "react-icons/fa";
import { SiCodewars, SiTryhackme, SiHackthebox, SiJavascript, SiReact, SiAmazonaws } from "react-icons/si";
import { ImMail } from "react-icons/im";
import { GrMail, GrLinkedinOption } from "react-icons/gr";

export default function Icon({ iconName = "github", className }) {
    const ID = useId();

    const icon = {
        codepen: <FaCodepen />,
        codewars: <SiCodewars />,
        github: <FaGithub />,
        hackerrank: <FaHackerrank />,
        linkedin: <FaLinkedin />,
        tryhackme: <SiTryhackme />,
        hackthebox: <SiHackthebox />,
        twitter: <FaTwitter />,
        instagram: <FaInstagram />,
        mastodon: <FaMastodon />,
        medium: <FaMediumM />,
        javascript: <SiJavascript />,
        reactjs: <SiReact />,
        nodejs: <FaNodeJs />,
        docker: <FaDocker />,
        aws: <SiAmazonaws />,
        linkedin_v2: <GrLinkedinOption />,
        email: <GrMail />
    };

    return (
        <span className={className} id={ID}>
            {icon[iconName]}
        </span>
    );
}
