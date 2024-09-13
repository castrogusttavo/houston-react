import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FileExportIcon({
  iconName = 'file-export',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
