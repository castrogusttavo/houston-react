import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LoginMethodIconIcon({ iconName = 'login-method-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
