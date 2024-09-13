import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SunglassesIcon({
  iconName = 'sunglasses',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
