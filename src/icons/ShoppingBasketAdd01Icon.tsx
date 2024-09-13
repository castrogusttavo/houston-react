import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ShoppingBasketAdd01Icon({
  iconName = 'shopping-basket-add-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
