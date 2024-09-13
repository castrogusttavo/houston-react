import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FolderCloudIcon({
  iconName = 'folder-cloud',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
