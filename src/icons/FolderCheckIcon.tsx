import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FolderCheckIcon({
  iconName = 'folder-check',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
