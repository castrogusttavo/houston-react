import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FlowerIcon({ iconName = 'flower', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
