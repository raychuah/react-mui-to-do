import React, { forwardRef } from "react";
import NextLink from "next/link";
import MuiLink from "@material-ui/core/Link";
import PropTypes from "prop-types";

const NextComposed = forwardRef((props, ref) => {
  const { href, as, prefetch, ...other } = props;
  return (
    <NextLink href={href} as={as} prefetch={prefetch}>
      <a ref={ref} {...other} />
    </NextLink>
  );
});

NextComposed.propTypes = {
  as: PropTypes.string,
  prefetch: PropTypes.func,
  props: PropTypes.object,
  href: PropTypes.string,
};

const Link = ({ children, href, className, ...other }) => {
  return (
    <MuiLink
      component={NextComposed}
      className={className}
      href={href}
      {...other}
    >
      {children}
    </MuiLink>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
};

export default Link;
