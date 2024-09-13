import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DishWasherIcon({
  iconName = 'dish-washer',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
