import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WifiMediumSignalIcon({
  iconName = 'wifi-medium-signal',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
