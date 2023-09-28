import { useId } from "react";
import SocialMediaList from "@/core/library/molecules/SocialMediaList.molecule";
import { base } from "@/styles/organisms/contactSection.module.scss";

export default function ContactSection({ socialMediaLinks }) {
    const ID = useId();

    return (
        <div className={base}>
            {socialMediaLinks && <SocialMediaList items={socialMediaLinks} />}
        </div>
    );
}