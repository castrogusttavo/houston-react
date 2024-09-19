import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MenuRestaurantIcon({ iconName = 'menu-restaurant-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
