import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FolderVideoIcon({
  iconName = 'folder-video',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
