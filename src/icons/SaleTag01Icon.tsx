import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SaleTag01Icon({
  iconName = 'sale-tag-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
