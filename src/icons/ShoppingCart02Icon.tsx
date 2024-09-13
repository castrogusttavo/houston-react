import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ShoppingCart02Icon({
  iconName = 'shopping-cart-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
