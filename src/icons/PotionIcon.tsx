import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PotionIcon({ iconName = 'potion', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
