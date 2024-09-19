import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RestaurantTableIcon({
  iconName = 'restaurant-table',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
