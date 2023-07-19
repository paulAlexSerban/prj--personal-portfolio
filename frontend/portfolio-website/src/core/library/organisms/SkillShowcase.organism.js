import LinkIcon from "@/core/atoms/LinkIcon.atom";
import { base, skillList, listItem } from "@/styles/organisms/skillShowcase.module.scss";

export default function SkillsShowcase({ list }) {
    return (
        <div className={base}>
            <ul className={skillList}>
                {list.map((item, index) => {
                    return (
                        <li className={listItem} key={index}>
                            <LinkIcon
                                label={item.name}
                                iconName={item.iconName}
                                href={`/tags/${item.tag}`}
                                isInternal={true}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
