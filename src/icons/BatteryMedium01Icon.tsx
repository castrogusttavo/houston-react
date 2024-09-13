import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BatteryMedium01Icon({
  iconName = 'battery-medium-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
