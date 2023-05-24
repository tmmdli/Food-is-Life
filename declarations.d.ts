declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
  };

