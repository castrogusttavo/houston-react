import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ThreeDMoveIcon({ iconName = '3d-move', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
