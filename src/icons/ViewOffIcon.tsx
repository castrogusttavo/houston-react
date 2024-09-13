import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ViewOffIcon({ iconName = 'view-off', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
