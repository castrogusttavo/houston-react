import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ShieldKeyIcon({ iconName = 'shield-key-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
