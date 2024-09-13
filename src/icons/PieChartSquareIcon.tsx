import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PieChartSquareIcon({
  iconName = 'pie-chart-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
