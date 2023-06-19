import PropTypes from "prop-types";
import classNames from 'classnames';

/**
 * The Paragraph component is used for rendering text content within a `<p>` element.
 * This component can either take `children` to render within the `<p>` element, or a `text` prop.
 * @component
 * @example
 * // Render a paragraph with text from the `text` prop.
 * <Paragraph text="Hello, world!" />
 * @example
 * // Render a paragraph with text from `children`.
 * <Paragraph>Hello, world!</Paragraph>
 * @param {Object} props The props.
 * @param {string[]} props.classNames The CSS classes to apply to the paragraph.
 * @param {string} props.text The text content of the paragraph. This is used if `children` is not provided.
 * @param {Node} props.children The children of the paragraph. If provided, this will override the `text` prop.
 * @returns {React.Node} Returns the Paragraph component.
 */

function Paragraph({ classNames: classes = [], text, children }) {
  return (
    <p className={classNames(classes)}>
      {children ?? text}
    </p>
  );
}

Paragraph.propTypes = {
  classNames: PropTypes.arrayOf(PropTypes.string),
  text: PropTypes.string,
  children: PropTypes.node,
};

Paragraph.defaultProps = {
  classNames: [],
  text: '',
  children: null,
};

export default Paragraph;
