import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BatteryEcoChargingIcon({
  iconName = 'battery-eco-charging',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
