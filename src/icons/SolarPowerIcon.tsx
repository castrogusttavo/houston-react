import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SolarPowerIcon({
  iconName = 'solar-power',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
