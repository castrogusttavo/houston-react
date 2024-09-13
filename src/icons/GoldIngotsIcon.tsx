import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GoldIngotsIcon({
  iconName = 'gold-ingots',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
