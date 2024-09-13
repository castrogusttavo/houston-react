import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WifiLocationIcon({
  iconName = 'wifi-location',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
