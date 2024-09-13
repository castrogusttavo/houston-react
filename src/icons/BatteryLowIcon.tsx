import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BatteryLowIcon({
  iconName = 'battery-low',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
