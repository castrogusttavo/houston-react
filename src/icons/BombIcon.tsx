import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BombIcon({ iconName = 'bomb', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
