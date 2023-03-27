import { useId } from "react";
import { Heading } from "@/core/atoms/typography/all";
import { base, container } from "@/styles/organisms/skillGallery.module.scss";
import SkillList from "./SkillList.organism";

export default function SkillGallery({ list = [] }) {
    const ID = useId();

    return (
        <div id={ID} className={base}>
            {list.map((item, index) => {
                return (
                    <article className={container} key={index}>
                        <Heading level={3} mainText={Object.keys(item)[0]} />
                        {item[Object.keys(item)[0]].map((skill, skillIndex) => {
                            return (
                                <SkillList
                                    key={skillIndex}
                                    isSoftSkill={
                                        Object.keys(item)[0] === "soft"
                                    }
                                    skillList={skill}
                                />
                            );
                        })}
                    </article>
                );
            })}
        </div>
    );
}
