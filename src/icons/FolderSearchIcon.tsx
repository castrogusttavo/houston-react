import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FolderSearchIcon({
  iconName = 'folder-search',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
