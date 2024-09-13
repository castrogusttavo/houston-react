import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MazeIcon({ iconName = 'maze', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
