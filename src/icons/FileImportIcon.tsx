import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FileImportIcon({
  iconName = 'file-import',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
