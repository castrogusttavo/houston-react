import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CloudUploadIcon({
  iconName = 'cloud-upload',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
