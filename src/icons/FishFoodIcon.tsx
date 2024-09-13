import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FishFoodIcon({ iconName = 'fish-food', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
