import { useId } from "react";
import {
	base,
	container,
	bottom,
	copyrightText,
	domainUrl,
} from "@/styles/organisms/footer.module.scss";
import { Link } from "@/core/atoms/typography/all";
import SocialMediaList from "../molecules/SocialMediaList.molecule";

const date = new Date();
const currentYear = date.getFullYear();

export default function Footer({ socialMediaLinks = [] }) {
	const ID = useId();
	const hasSocialMediaLinks = socialMediaLinks.length > 0;

	return (
		<footer id={ID} className={base}>
			<div className={container}>
				{hasSocialMediaLinks && <SocialMediaList items={socialMediaLinks} position="footer"/>}
			</div>
			<div className={bottom}>
				<span className={copyrightText}>
					{currentYear} &copy; Paul Serban. All rights reserved.
				</span>
				<Link className={domainUrl} label="www.paulserban.eu" isInternal={true} />
			</div>
		</footer>
	);
}
