import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DiamondIcon({ iconName = 'diamond', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
