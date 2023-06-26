
import { base, listItem } from "@/styles/molecules/cardList.module.scss";
import Card from "@/core/molecules/Card.molecule";

export default function CardList({ list, category, section }) {

    return (
        <>
            {list && (
                <ul className={base}>
                    {list.map((itemContent, index) => {
                        return (
                            <li className={listItem} key={index}>
                                <Card content={itemContent} category={category} section={section} />
                            </li>
                        );
                    })}
                </ul>
            )}
        </>
    );
}
