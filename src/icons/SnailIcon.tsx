import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SnailIcon({ iconName = 'snail', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
