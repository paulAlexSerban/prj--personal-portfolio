import { useId } from "react";
import { Paragraph, Heading, Link } from "@/core/atoms/typography/all";
import FlexGrid from "@/core/library/layouts/FlexGrid.layout";
import { base } from "@/styles/organisms/skillGallery.module.scss";

import SkillList from "./SkillList.organism";

export default function SkillGallery({ list = [] }) {
    const ID = useId();

    return (
        <div id={ID} className={base}>
            <FlexGrid classNames={["grid--full-width"]}>
                <FlexGrid gridElement="row">
                    {list.map((item, index) => {
                        return (
                            <FlexGrid
                                key={index}
                                gridElement="col"
                                classNames={[
                                    "col-smartphone-4",
                                    `col-tablet-${12 / list.length}`,
                                ]}>
                                <article>
                                    <Heading
                                        level="3"
                                        mainText={Object.keys(item)[0]}
                                    />
                                    {item[Object.keys(item)[0]].map(
                                        (skill, skillIndex) => {
                                            return (
                                                <SkillList
                                                    isSoftSkill={
                                                        Object.keys(item)[0] ===
                                                        "soft"
                                                    }
                                                    key={skillIndex}
                                                    skillList={skill}
                                                />
                                            );
                                        }
                                    )}
                                </article>
                            </FlexGrid>
                        );
                    })}
                </FlexGrid>
            </FlexGrid>
        </div>
    );
}
