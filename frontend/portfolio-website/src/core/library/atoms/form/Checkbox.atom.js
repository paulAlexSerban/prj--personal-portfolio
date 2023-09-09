import { base, labelStyle, input, checkbox } from '@/styles/atoms/checkbox.module.scss';

export default function Checkbox({ checked, name, disabled, label, onChange, inputId }) {
    return (
        <label className={base} tabIndex="0" htmlFor={inputId}>
            <input
                id={inputId}
                className={input}
                type="checkbox"
                checked={checked}
                name={name}
                disabled={disabled}
                onChange={onChange}
                tabIndex="-1"
            />
            <span className={checkbox}>

            </span>
            <span className={labelStyle}>{label}</span>
        </label>
    );
}
