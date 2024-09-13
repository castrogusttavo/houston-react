import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ImageCompositionIcon({
  iconName = 'image-composition',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
