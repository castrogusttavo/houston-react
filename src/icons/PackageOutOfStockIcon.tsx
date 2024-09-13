import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PackageOutOfStockIcon({
  iconName = 'package-out-of-stock',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
