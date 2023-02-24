import { useId } from "react";
import LinkIcon from "@/core/atoms/LinkIcon.atom";
import sanitizeQueryString from "@/core/utils/sanitizeQueryString";
import { base, skillList, listItem } from "@/styles/organisms/skillShowcase.module.scss";
  

export default function SkillsShowcase({ list }) {
  const ID = useId();

  return (
    <div id={ID} className={base}>
      <ul className={skillList}>
        {list.map((item, index) => {
          return (
            <li className={listItem} key={index}>
              <LinkIcon
                label={item.name}
                iconName={item.iconName}
                href={`/tags/${sanitizeQueryString(item.name)}`}
                isInternal={true}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
