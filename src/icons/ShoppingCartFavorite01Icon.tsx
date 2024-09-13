import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ShoppingCartFavorite01Icon({
  iconName = 'shopping-cart-favorite-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
