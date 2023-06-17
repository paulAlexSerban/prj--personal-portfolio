import SkillGallery from "@/core/library/organisms/SkillGallery.organism";
import SkillShowcase from "@/core/library/organisms/SkillShowcase.organism";
import {base} from "@/styles/organisms/skillsOverview.module.scss";

export default function SkillOverview({ mainSkills, skillGallery }) {

    return (
        <div className={base}>
            {skillGallery && (
                <>
                    {mainSkills && <SkillShowcase list={mainSkills} />}
                    {skillGallery && <SkillGallery list={skillGallery} />}
                </>
            )}
        </div>
    );
}
