import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Discount01Icon({
  iconName = 'discount-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
