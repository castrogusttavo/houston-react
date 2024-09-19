import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SpoonAndKnifeIcon({ iconName = 'spoon-and-knife-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
