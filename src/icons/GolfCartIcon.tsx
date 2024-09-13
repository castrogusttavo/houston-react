import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GolfCartIcon({ iconName = 'golf-cart', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
