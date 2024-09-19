import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ResetPasswordIcon({
  iconName = 'reset-password',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
