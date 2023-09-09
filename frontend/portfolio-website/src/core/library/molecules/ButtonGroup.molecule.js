import styles, { base, container, header, footer } from '@/styles/molecules/buttonGroup.module.scss';

export default function ButtonGroup({ children, classNames }) {
    return <div className={[base, classNames].join(' ')}>{children}</div>;
}
