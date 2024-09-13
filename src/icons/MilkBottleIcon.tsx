import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MilkBottleIcon({
  iconName = 'milk-bottle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
