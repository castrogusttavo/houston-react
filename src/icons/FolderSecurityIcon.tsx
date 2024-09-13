import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FolderSecurityIcon({
  iconName = 'folder-security',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
