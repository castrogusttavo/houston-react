import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RegisterIcon({ iconName = 'register', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
