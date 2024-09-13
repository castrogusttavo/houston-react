import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BookDownloadIcon({
  iconName = 'book-download',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
