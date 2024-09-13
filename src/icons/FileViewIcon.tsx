import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FileViewIcon({ iconName = 'file-view', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
