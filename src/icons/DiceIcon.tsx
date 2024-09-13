import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DiceIcon({ iconName = 'dice', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
