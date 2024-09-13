import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ShoppingBasketDone01Icon({
  iconName = 'shopping-basket-done-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
