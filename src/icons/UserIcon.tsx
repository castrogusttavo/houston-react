import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UserIcon({ iconName = 'user', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
