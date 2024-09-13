import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ElectricWireIcon({
  iconName = 'electric-wire',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
