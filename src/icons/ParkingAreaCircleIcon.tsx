import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ParkingAreaCircleIcon({
  iconName = 'parking-area-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
