import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ShippingCenterIcon({
  iconName = 'shipping-center',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
