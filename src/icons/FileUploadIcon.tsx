import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FileUploadIcon({
  iconName = 'file-upload',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
