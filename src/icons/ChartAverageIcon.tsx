import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ChartAverageIcon({
  iconName = 'chart-average',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
