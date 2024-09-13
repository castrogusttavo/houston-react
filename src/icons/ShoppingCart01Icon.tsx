import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ShoppingCart01Icon({
  iconName = 'shopping-cart-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
