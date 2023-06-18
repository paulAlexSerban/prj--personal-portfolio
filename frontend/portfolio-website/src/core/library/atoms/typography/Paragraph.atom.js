import PropTypes from "prop-types";

export default function Paragraph(props) {
  const { classNames = [], text } = props;
  return (
    <p className={[...classNames].join(" ")}>
      {props.children ?? text}
    </p>
  );
}
