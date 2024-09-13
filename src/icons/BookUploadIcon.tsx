import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BookUploadIcon({
  iconName = 'book-upload',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
