import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GpsDisconnectedIcon({
  iconName = 'gps-disconnected',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
