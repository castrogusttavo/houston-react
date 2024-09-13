import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FolderFavouriteIcon({
  iconName = 'folder-favourite',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
