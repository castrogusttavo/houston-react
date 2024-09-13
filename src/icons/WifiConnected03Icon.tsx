import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WifiConnected03Icon({
  iconName = 'wifi-connected-03',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
