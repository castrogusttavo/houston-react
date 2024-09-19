import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FolderExportIcon({
  iconName = 'folder-export',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
