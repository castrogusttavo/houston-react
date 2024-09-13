import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ChartRingIcon({
  iconName = 'chart-ring',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
