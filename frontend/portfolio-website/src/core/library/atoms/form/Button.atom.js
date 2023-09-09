import styles, { base } from '@/styles/atoms/button.module.scss';

export default function Button({ label, onClick, type, className, disabled, children, styleType }) {
    return (
        <button className={[base, className, styles[`base--${styleType}`]].join(' ')} onClick={onClick} type={type} disabled={disabled}>
            {label}
            {children}
        </button>
    );
}
