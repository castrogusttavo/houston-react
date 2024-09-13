import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Login01Icon({ iconName = 'login-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
