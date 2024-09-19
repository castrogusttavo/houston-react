import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RestaurantTableIconIcon({ iconName = 'restaurant-table-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
