import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DeviceAccessIconIcon({ iconName = 'device-access-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
