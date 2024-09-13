import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SlidersVerticalIcon({
  iconName = 'sliders-vertical',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
