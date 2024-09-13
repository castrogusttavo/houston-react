import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CoinsDollarIcon({
  iconName = 'coins-dollar',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
