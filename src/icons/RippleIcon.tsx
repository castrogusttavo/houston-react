import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RippleIcon({ iconName = 'ripple', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
