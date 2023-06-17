import { useId } from "react";
import {
    base,
    container,
    navToggle,
    navContent,
} from "@/styles/organisms/pageNavigation.module.scss";

import NavigationList from "@/core/molecules/NavigationList.molecule";



export default function PageNavigation({ pageNavLinks = []}) {
    const ID = useId();

    return (
        <aside id={ID} className={base}>
            <div className={container}>
                <div className={navContent}>
                    <NavigationList
                        items={pageNavLinks}
                        navPosition="pageNav"
                    />
                </div>
            </div>
        </aside>
    );
}
