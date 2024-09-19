import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TwoFactorAccessIcon({
  iconName = 'two-factor-access',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
