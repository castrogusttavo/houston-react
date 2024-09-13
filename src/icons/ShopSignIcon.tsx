import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ShopSignIcon({ iconName = 'shop-sign', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
