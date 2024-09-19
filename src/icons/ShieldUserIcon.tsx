import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ShieldUserIcon({ iconName = 'shield-user-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
