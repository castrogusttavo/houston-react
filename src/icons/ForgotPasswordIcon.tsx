import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ForgotPasswordIcon({ iconName = 'forgot-password-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
