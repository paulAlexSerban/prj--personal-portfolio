import { Heading, Link } from "@/core/atoms/typography";
import { sanitizeQueryString } from "@/core/utils/TextUtils";
import { base, list, listItem } from "@/styles/molecules/skillList.module.scss";

export default function SkillList({ skillList = [], isGroup = false }) {
    return (
        <div className={base}>
            {isGroup && <Heading level={4} mainText={skillList.name} />}

            <ul className={list}>
                {isGroup
                    ? skillList.list.map((skill, index) => (
                          <li key={index} className={listItem}>
                              <Link href={`/tags/${sanitizeQueryString(skill)}`} label={skill} isInternal={true}>
                                  {skill}
                              </Link>
                          </li>
                      ))
                    : skillList.map((skill, index) => (
                          <li key={index} className={listItem}>
                              <Link href={`/tags/${sanitizeQueryString(skill)}`} label={skill} isInternal={true}>
                                  {skill}
                              </Link>
                          </li>
                      ))}
            </ul>
        </div>
    );
}
