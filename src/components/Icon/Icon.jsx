import React from "react";
import * as style from './icon.style';

import { Box } from 'theme-ui';

export const IconComponent = () => {

  // logic here

  return (
    <Box>
      <Box sx={style.iconContainer}></Box>
      <Box sx={style.iconWrapperFunction()}></Box>
      <Box sx={style.iconWrapperFunction2()}></Box>
    </Box>

  );
}