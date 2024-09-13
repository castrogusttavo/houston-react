import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ChartRoseIcon({
  iconName = 'chart-rose',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
