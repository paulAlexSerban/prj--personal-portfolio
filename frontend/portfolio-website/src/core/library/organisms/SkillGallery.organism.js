import { Heading } from "@/core/atoms/typography";
import { base, container } from "@/styles/organisms/skillGallery.module.scss";
import SkillList from "../molecules/SkillList.molecule";
import { capitalizeFirstLetter } from "@/core/utils/TextUtils";

export default function SkillGallery({ list = [] }) {
    return (
        <div className={base}>
            {list.map((item, index) => {
                return (
                    <article className={container} key={index}>
                        <Heading level={3} mainText={capitalizeFirstLetter(item.groupCategory)} />
                        {item.groups ? (
                            item.groups.map((groupItem, groupItemIndex) => {
                                return <SkillList key={groupItemIndex} skillList={groupItem} isGroup={true} />;
                            })
                        ) : (
                            <SkillList skillList={item.list} />
                        )}
                    </article>
                );
            })}
        </div>
    );
}
