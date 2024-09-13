import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WifiUnlockIcon({
  iconName = 'wifi-unlock',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
