import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ChartScatterIcon({
  iconName = 'chart-scatter',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
