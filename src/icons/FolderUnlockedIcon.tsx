import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FolderUnlockedIcon({
  iconName = 'folder-unlocked',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
