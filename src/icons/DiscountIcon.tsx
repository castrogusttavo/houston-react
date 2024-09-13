import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DiscountIcon({ iconName = 'discount', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
