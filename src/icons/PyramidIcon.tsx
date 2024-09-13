import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PyramidIcon({ iconName = 'pyramid', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
