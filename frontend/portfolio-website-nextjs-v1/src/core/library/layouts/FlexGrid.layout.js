import styles from "@/styles/layouts/flex-grid/flexGrid.module.scss";
import { useId } from "react";
export default function FlexGrid({
    children,
    sectionId,
    classNames = [],
    gridElement,
}) {
    const ID = useId();

    const gridEl = {
        container: (
            <div className={styles.base} id={sectionId ? sectionId : ID}>
                <div className={classNames.map((cls) => styles[cls]).join(" ")}>
                    {children}
                </div>
            </div>
        ),
        row: (
            <div
                className={`${styles.row} ${classNames
                    .map((cls) => styles[cls])
                    .join(" ")}`}
                id={ID}
            >
                {children}
            </div>
        ),
        col: (
            <div
                className={`${classNames
                    .map((cls) => styles[cls])
                    .join(" ")}`}
                id={ID}
            >
                {children}
            </div>
        ),
    };

    return gridEl[gridElement];
}
