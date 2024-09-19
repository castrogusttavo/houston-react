import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Restaurant02Icon({
  iconName = 'restaurant-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
