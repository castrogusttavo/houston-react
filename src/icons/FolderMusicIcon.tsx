import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FolderMusicIcon({
  iconName = 'folder-music',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
