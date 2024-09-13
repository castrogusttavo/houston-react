import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PasswordValidationIcon({
  iconName = 'password-validation',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
