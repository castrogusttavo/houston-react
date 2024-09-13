import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RhombusIcon({ iconName = 'rhombus', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
