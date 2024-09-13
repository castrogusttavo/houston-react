import React from 'react'
import { Icon, IconProps } from '../Icon'

export function VegetarianFoodIcon({
  iconName = 'vegetarian-food',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
