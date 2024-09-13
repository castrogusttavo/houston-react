import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CapcutIcon({ iconName = 'capcut', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
