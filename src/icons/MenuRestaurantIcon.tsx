import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MenuRestaurantIcon({
  iconName = 'menu-restaurant',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
