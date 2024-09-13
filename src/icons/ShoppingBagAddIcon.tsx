import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ShoppingBagAddIcon({
  iconName = 'shopping-bag-add',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
