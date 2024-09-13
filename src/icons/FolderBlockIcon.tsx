import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FolderBlockIcon({
  iconName = 'folder-block',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
