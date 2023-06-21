import PropTypes from "prop-types";
export default function ExternalLink({ href, classNames, ariaLabel, children, handleMouseEnter, handleMouseLeave }) {
  return (
      <a
          href={href}
          className={classNames}
          aria-label={ariaLabel}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleMouseEnter}
          onTouchEnd={handleMouseLeave}
          target="_blank"
          rel="noopener noreferrer"
      >
          {children}
      </a>
  );
}

ExternalLink.propTypes = {
    href: PropTypes.string,
    classNames: PropTypes.string,
    ariaLabel: PropTypes.string,
    children: PropTypes.node,
    handleMouseEnter: PropTypes.func,
    handleMouseLeave: PropTypes.func,
};
