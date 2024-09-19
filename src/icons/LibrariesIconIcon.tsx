import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LibrariesIconIcon({ iconName = 'libraries-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
