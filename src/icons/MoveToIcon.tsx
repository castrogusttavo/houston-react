import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MoveToIcon({ iconName = 'move-to', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
