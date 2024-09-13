import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CloudDownloadIcon({
  iconName = 'cloud-download',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
