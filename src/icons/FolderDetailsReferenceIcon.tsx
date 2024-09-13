import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FolderDetailsReferenceIcon({
  iconName = 'folder-details-reference',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
