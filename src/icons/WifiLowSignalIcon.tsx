import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WifiLowSignalIcon({
  iconName = 'wifi-low-signal',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
