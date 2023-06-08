declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<
    SvgProps & {
      fill?: string;
    }
  >;
  export default content;
}
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
};
