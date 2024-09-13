import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SoilTemperatureFieldIcon({
  iconName = 'soil-temperature-field',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
