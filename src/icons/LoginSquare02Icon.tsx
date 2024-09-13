import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LoginSquare02Icon({
  iconName = 'login-square-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
