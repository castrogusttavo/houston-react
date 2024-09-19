import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MenuRestaurantIconIcon({ iconName = 'menu-restaurant-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
