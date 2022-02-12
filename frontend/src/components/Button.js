import React from "react";
import styles from "./Button.module.scss";
import PropTypes from 'prop-types'

export const Button = ({ content }) => {
  return (
    <div>
      <button className={styles.btn}>{content}</button>
    </div>
  );
};

Button.propTypes = {
  content: PropTypes.string
}


