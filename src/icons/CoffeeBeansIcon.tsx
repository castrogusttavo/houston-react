import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CoffeeBeansIcon({
  iconName = 'coffee-beans',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
