import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ShipmentTrackingIcon({
  iconName = 'shipment-tracking',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
