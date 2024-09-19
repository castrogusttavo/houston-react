import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TravelBagIconIcon({ iconName = 'travel-bag-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
