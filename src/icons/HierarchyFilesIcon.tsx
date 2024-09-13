import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HierarchyFilesIcon({
  iconName = 'hierarchy-files',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
