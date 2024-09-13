import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ElectricPlugsIcon({
  iconName = 'electric-plugs',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
