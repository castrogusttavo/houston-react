import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FolderOffIcon({
  iconName = 'folder-off',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
