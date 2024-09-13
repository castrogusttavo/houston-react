import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ThreeDScaleIcon({
  iconName = '3d-scale',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
