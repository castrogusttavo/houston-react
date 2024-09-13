import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ShoppingBagCheckIcon({
  iconName = 'shopping-bag-check',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
