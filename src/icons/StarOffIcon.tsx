import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StarOffIcon({ iconName = 'star-off', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
