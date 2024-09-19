import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BiometricAccessIcon({ iconName = 'biometric-access-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
