import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FileSyncIcon({ iconName = 'file-sync', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
