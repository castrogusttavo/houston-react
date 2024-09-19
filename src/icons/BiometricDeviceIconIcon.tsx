import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BiometricDeviceIconIcon({ iconName = 'biometric-device-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
