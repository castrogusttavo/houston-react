import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FolderLockedIcon({
  iconName = 'folder-locked',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
