import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StructureFolderCircleIcon({
  iconName = 'structure-folder-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
