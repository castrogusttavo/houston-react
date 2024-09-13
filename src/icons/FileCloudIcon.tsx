import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FileCloudIcon({
  iconName = 'file-cloud',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
