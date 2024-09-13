import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WifiLockIcon({ iconName = 'wifi-lock', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
