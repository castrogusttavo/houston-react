import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ShippingTruck01Icon({
  iconName = 'shipping-truck-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
