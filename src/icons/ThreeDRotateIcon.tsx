import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ThreeDRotateIcon({
  iconName = '3d-rotate',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
