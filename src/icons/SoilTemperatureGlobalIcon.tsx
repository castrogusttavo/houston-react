import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SoilTemperatureGlobalIcon({
  iconName = 'soil-temperature-global',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
