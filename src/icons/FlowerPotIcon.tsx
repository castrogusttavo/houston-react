import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FlowerPotIcon({
  iconName = 'flower-pot',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
