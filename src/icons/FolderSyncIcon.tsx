import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FolderSyncIcon({
  iconName = 'folder-sync',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
