import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ForkIcon({ iconName = 'fork', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
