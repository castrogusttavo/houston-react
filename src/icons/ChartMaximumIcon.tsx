import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ChartMaximumIcon({
  iconName = 'chart-maximum',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
