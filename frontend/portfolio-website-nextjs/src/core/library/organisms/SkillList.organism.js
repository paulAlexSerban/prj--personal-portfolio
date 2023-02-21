import { Heading, Link } from "@/core/atoms/typography/all";
import sanitizeQueryString from "@/core/utils/sanitizeQueryString";
import { base, list, listItem } from "@/styles/organisms/skillList.module.scss";
import getPath from "@/core/utils/getPath";

const loremList = {
    title: "Lorem Skill List Title",
    skills: ["Lorem Skill One", "Lorem Skill Two"],
};

export default function SkillList({
    skillList = loremList,
    isSoftSkill = false,
    index,
}) {
    return (
        <div className={base} key={index}>
            {skillList.title && (
                <Heading level={4} mainText={skillList.title} />
            )}

            <ul className={list}>
                {skillList.skills.map((item, index) =>
                    isSoftSkill ? (
                        <li key={index} className={listItem}>
                            {item}
                        </li>
                    ) : (
                        <li key={index} className={listItem}>
                            <Link
                                href={getPath(`/tags/${sanitizeQueryString(item)}`)}
                                label={item}
                                isInternal={true}
                            />
                        </li>
                    )
                )}
            </ul>
        </div>
    );
}
