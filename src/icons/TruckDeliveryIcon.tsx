import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TruckDeliveryIcon({
  iconName = 'truck-delivery',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
