import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WaterPumpIcon({
  iconName = 'water-pump',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
