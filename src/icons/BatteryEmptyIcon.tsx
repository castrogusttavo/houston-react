import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BatteryEmptyIcon({
  iconName = 'battery-empty',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
