import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TwoFactorAccessIcon({ iconName = 'two-factor-access-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
