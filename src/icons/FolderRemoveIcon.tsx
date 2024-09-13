import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FolderRemoveIcon({
  iconName = 'folder-remove',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
