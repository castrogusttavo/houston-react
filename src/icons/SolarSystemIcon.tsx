import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SolarSystemIcon({
  iconName = 'solar-system',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
