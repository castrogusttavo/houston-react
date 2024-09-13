import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DeliveryTruck01Icon({
  iconName = 'delivery-truck-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
