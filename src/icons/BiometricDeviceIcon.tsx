import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BiometricDeviceIcon({
  iconName = 'biometric-device',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
