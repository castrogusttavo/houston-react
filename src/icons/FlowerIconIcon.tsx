import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FlowerIconIcon({ iconName = 'flower-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
