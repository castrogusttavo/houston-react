import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ImageUpload01Icon({
  iconName = 'image-upload-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
