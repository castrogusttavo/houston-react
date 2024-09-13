import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FolderAttachmentIcon({
  iconName = 'folder-attachment',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
