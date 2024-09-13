import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BatteryMedium02Icon({
  iconName = 'battery-medium-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
