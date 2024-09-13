import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AircraftGameIcon({
  iconName = 'aircraft-game',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
