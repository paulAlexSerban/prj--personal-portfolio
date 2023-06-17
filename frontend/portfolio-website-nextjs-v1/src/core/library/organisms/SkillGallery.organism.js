
import { Heading } from "@/core/atoms/typography/all";
import { base, container } from "@/styles/organisms/skillGallery.module.scss";
import SkillList from "./SkillList.organism";
import capitalizeFirstLetter from "@/core/utils/string/capitalizeFirstLetter";

export default function SkillGallery({ list = [] }) {
    return (
        <div className={base}>
            {list.map((item, index) => {
                return (
                    <article className={container} key={index}>
                        <Heading level={3} mainText={capitalizeFirstLetter(Object.keys(item)[0])} />
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
