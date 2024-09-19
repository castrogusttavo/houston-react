import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SpoonAndForkIcon({ iconName = 'spoon-and-fork-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
