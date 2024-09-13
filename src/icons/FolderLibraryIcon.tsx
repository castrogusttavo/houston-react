import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FolderLibraryIcon({
  iconName = 'folder-library',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
