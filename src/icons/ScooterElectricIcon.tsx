import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ScooterElectricIcon({
  iconName = 'scooter-electric',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
