import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MoveTopIcon({ iconName = 'move-top', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
