import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HotPriceIcon({ iconName = 'hot-price', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
