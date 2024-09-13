import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FileDownloadIcon({
  iconName = 'file-download',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
