import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CafeIcon({ iconName = 'cafe-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
