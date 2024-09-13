import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ShoppingBagFavoriteIcon({
  iconName = 'shopping-bag-favorite',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
