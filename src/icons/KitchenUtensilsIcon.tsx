import React from 'react'
import { Icon, IconProps } from '../Icon'

export function KitchenUtensilsIcon({
  iconName = 'kitchen-utensils',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
