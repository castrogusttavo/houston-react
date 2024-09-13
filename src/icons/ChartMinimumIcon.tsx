import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ChartMinimumIcon({
  iconName = 'chart-minimum',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
