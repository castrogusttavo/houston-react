import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RotateCropIcon({
  iconName = 'rotate-crop',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
