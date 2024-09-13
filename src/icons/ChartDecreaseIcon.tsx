import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ChartDecreaseIcon({
  iconName = 'chart-decrease',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
