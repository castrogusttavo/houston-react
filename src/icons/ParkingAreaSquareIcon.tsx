import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ParkingAreaSquareIcon({
  iconName = 'parking-area-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
