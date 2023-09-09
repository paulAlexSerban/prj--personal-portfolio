import { base, labelStyle, input, checkbox, icon } from '@/styles/atoms/checkbox.module.scss';
import Icon from '@/core/atoms/Icon.atom';

export default function Checkbox({ checked, name, disabled, label, onChange, inputId }) {
    return (
        <label className={base} tabIndex="0" htmlFor={inputId} disabled={disabled}>
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
                <Icon iconName="checkmark" classNames={[icon]} />
            </span>
            <span className={labelStyle}>{label}</span>
        </label>
    );
}
