import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ChartHighLowIcon({
  iconName = 'chart-high-low',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
