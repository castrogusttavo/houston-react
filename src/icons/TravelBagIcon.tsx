import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TravelBagIcon({
  iconName = 'travel-bag',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
