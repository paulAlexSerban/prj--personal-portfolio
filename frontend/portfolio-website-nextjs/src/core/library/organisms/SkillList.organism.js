import { Heading, Link } from "@/core/atoms/typography/all";
import sanitizeQueryString from "@/core/utils/sanitizeQueryString";
import { base, list, listItem } from "@/styles/organisms/skillList.module.scss";


const loremList = {
    title: "Lorem Skill List Title",
    skills: ["Lorem Skill One", "Lorem Skill Two"],
};

export default function SkillList({
    skillList = loremList,
    isSoftSkill = false,
}) {
    return (
        <div className={base}>
            {skillList.title && (
                <Heading level="4" mainText={skillList.title} />
            )}

            <ul className={list}>
                {skillList.skills.map((item, index) => {
                    return (
                        <>
                            {isSoftSkill ? (
                                <li key={index} className={listItem}>
                                    {item}
                                </li>
                            ) : (
                                <li key={index} className={listItem}>
                                    <Link
                                        href={`/tags/${sanitizeQueryString(
                                            item
                                        )}`}
                                        label={item}
                                    />
                                </li>
                            )}
                        </>
                    );
                })}
            </ul>
        </div>
    );
}
