import styles, { base, listItem } from "@/styles/molecules/socialMediaList.module.scss";

import LinkIcon from "@/core/atoms/LinkIcon.atom";

export default function SocialMediaList({ items = [], position = "", classNames }) {

    return (
        <ul className={`${base} ${classNames}`}>
            {items.map((item, index) => {
                return (
                    <li className={listItem} key={index}>
                        <LinkIcon
                            label={item.label}
                            href={item.href}
                            iconName={item.icon}
                            position={position}
                            isEncoded={item.isEncoded}
                            isInternal={false}
                        />
                    </li>
                );
            })}
        </ul>
    );
}
