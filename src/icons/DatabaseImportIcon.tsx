import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DatabaseImportIcon({
  iconName = 'database-import',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
