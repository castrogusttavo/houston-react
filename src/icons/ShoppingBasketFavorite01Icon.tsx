import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ShoppingBasketFavorite01Icon({
  iconName = 'shopping-basket-favorite-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
