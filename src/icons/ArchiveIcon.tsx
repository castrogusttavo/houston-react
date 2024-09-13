import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ArchiveIcon({ iconName = 'archive', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
