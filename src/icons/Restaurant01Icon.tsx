import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Restaurant01Icon({
  iconName = 'restaurant-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
