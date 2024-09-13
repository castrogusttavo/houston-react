import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FolderPinIcon({
  iconName = 'folder-pin',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
