import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ImageCropIcon({
  iconName = 'image-crop',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
