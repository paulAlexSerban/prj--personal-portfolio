import PropTypes from "prop-types";

export default function List({  items = [], classNames= [] }) {
    return (
        <ul className={classNames.join(' ')}>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

/**
 * Add propTypes to the component
 * - It's a good practice to add propTypes to the component to ensure that the correct props are passed to it.
 * - Use the prop-types package to define the propTypes for the component.
 * - The items prop is an array of elements.
 */
List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.node),
};
