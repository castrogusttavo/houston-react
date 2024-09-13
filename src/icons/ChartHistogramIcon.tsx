import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ChartHistogramIcon({
  iconName = 'chart-histogram',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
