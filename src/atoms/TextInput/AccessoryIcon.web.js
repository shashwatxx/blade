import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import Space from '../Space';
import View from '../View';

const styles = {
  color({ disabled, hasError }) {
    if (hasError) {
      return 'negative.900';
    } else if (disabled) {
      return 'shade.930';
    } else {
      return 'shade.950';
    }
  },
  padding({ variant }) {
    if (variant === 'filled') {
      return [0, 1, 0, 1];
    } else {
      return [1, 1, 0, 0];
    }
  },
};

const AccessoryIcon = ({ name, disabled, hasError, variant }) => {
  return (
    <Space padding={styles.padding({ variant })}>
      <View>
        <Icon name={name} size="small" fill={styles.color({ disabled, hasError })} />
      </View>
    </Space>
  );
};

AccessoryIcon.propTypes = {
  name: PropTypes.string,
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
  variant: PropTypes.oneOf(['filled', 'outlined']).isRequired,
};

AccessoryIcon.defaultProps = {
  name: 'info',
  disabled: false,
  hasError: false,
};

export default AccessoryIcon;
