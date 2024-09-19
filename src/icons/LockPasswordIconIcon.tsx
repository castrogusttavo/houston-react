import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LockPasswordIconIcon({ iconName = 'lock-password-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
