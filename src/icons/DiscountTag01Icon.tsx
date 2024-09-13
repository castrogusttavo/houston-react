import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DiscountTag01Icon({
  iconName = 'discount-tag-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
