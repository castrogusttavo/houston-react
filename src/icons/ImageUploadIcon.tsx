import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ImageUploadIcon({
  iconName = 'image-upload',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
