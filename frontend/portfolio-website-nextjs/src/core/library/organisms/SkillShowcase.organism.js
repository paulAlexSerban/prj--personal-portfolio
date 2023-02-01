import { useId } from "react";
import LinkIcon from "@/core/atoms/LinkIcon.atom";
import sanitizeQueryString from "@/core/utils/sanitizeQueryString";
import { base, skillList, listItem } from "@/styles/organisms/skillShowcase.module.scss";

export default function SkillsShowcase() {
    const ID = useId();

    const list = [
        { name: "JavaScript", iconName: "javascript" },
        { name: "React.js", iconName: "reactjs" },
        { name: "Node.js", iconName: "nodejs" },
        { name: "Docker", iconName: "docker" },
        { name: "Amazon Web Services", iconName: "aws" },
    ];

    console.log();

    return (
        <article id={ID} className={base}>
            <ul className={skillList}>
                {list.map((item, index) => {
                    return (
                        <li className={listItem} key={index}>
                            <LinkIcon
                                label={item.name}
                                iconName={item.iconName}
                                href={`/portfolio?tag=${sanitizeQueryString(
                                    item.name
                                )}`}
                            />
                        </li>
                    );
                })}
            </ul>
        </article>
    );
}
