import PropTypes from 'prop-types';
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
    FaLinux,
    FaJava,
} from 'react-icons/fa';
import {
    SiCodewars,
    SiTryhackme,
    SiHackthebox,
    SiJavascript,
    SiReact,
    SiAmazonaws,
    SiGnubash,
    SiAngular,
    SiTypescript,
    SiCss3,
    SiHtml5,
    SiPhp,
    SiPython,
    SiRust,
    SiLeetcode,
} from 'react-icons/si';
import { BsCheck } from 'react-icons/bs';
import { GrMail, GrLinkedinOption, GrDocumentText } from 'react-icons/gr';

export default function Icon({ iconName = 'github', classNames = [], ...rest }) {
    const classes = classNames.join(' ');

    const icon = {
        angular: <SiAngular title="Angular" />,
        aws: <SiAmazonaws title="Amazon Web Services" />,
        bash_shell: <SiGnubash title="Bash/Shell" />,
        codepen: <FaCodepen title="CodePen" />,
        codewars: <SiCodewars title="Codewars" />,
        css: <SiCss3 title="CSS" />,
        document: <GrDocumentText title="Document" />,
        email: <GrMail title="Email" />,
        github: <FaGithub title="GitHub" />,
        globe: <FaGlobe title="Globe" />,
        hackerrank: <FaHackerrank title="HackerRank" />,
        html: <SiHtml5 title="HTML" />,
        java: <FaJava title="Java" />,
        linkedin: <FaLinkedin title="LinkedIn" />,
        tryhackme: <SiTryhackme title="TryHackMe" />,
        hackthebox: <SiHackthebox title="Hack The Box" />,
        twitter: <FaTwitter title="Twitter" />,
        instagram: <FaInstagram title="Instagram" />,
        mastodon: <FaMastodon title="Mastodon" />,
        medium: <FaMediumM title="Medium" />,
        php: <SiPhp title="PHP" />,
        python: <SiPython title="Python" />,
        rust: <SiRust title="Rust" />,
        javascript: <SiJavascript title="JavaScript" />,
        reactjs: <SiReact title="React" />,
        nodejs: <FaNodeJs title="Node.js" />,
        docker: <FaDocker title="Docker" />,
        linkedin_v2: <GrLinkedinOption title="LinkedIn" />,
        folder: <FaFolderOpen title="Read More" />,
        linux: <FaLinux title="Linux" />,
        typescript: <SiTypescript title="TypeScript" />,
        leetcode: <SiLeetcode title="LeetCode" />,
        checkmark: <BsCheck title="Check" />,
    };

    const selectedIcon = icon[iconName] || <FaGlobe title="Globe" />;

    return (
        <span className={classes} {...rest}>
            {selectedIcon}
        </span>
    );
}

Icon.propTypes = {
    iconName: PropTypes.string.isRequired,
    classNames: PropTypes.array,
};
