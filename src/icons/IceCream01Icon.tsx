import React from 'react'
import { Icon, IconProps } from '../Icon'

export function IceCream01Icon({
  iconName = 'ice-cream-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
