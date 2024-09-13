import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ShoppingBasket01Icon({
  iconName = 'shopping-basket-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
