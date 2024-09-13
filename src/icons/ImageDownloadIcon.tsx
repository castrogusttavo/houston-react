import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ImageDownloadIcon({
  iconName = 'image-download',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
