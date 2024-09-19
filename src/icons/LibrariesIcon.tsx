import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LibrariesIcon({ iconName = 'libraries', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
