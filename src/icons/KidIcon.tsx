import React from 'react'
import { Icon, IconProps } from '../Icon'

export function KidIcon({ iconName = 'kid', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
