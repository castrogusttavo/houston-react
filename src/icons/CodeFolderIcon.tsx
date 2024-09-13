import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CodeFolderIcon({
  iconName = 'code-folder',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
