import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DatabaseRestoreIcon({
  iconName = 'database-restore',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
