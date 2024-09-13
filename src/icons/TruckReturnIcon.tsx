import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TruckReturnIcon({
  iconName = 'truck-return',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
