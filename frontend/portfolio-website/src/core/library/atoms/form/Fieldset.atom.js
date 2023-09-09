import { base } from '@/styles/atoms/fieldset.module.scss';

export default function Fieldset({ children, legend }) {
  return (
    <fieldset className={base}>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
}