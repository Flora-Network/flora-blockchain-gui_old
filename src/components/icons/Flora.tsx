import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as FloraIcon } from './images/flora.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={FloraIcon} viewBox="0 0 150 58" {...props} />;
} 