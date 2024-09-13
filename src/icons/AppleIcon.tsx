import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AppleIcon({ iconName = 'apple', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
