import React from 'react'
import { Icon, IconProps } from '../Icon'

export function EaseInIcon({ iconName = 'ease-in', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
