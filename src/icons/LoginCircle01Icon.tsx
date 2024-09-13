import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LoginCircle01Icon({
  iconName = 'login-circle-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
