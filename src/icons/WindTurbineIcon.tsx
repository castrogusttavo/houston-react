import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WindTurbineIcon({
  iconName = 'wind-turbine',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
