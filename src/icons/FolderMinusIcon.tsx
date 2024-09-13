import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FolderMinusIcon({
  iconName = 'folder-minus',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
