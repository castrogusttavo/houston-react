import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DatabaseExportIcon({
  iconName = 'database-export',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
