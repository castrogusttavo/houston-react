import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CookBookIcon({ iconName = 'cook-book', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
