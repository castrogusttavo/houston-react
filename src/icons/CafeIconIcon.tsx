import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CafeIconIcon({ iconName = 'cafe-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
