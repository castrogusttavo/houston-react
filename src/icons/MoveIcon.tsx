import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MoveIcon({ iconName = 'move', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
