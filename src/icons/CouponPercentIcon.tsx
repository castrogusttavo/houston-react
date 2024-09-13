import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CouponPercentIcon({
  iconName = 'coupon-percent',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
