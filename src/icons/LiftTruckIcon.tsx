import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LiftTruckIcon({
  iconName = 'lift-truck',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
