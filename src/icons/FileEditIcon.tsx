import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FileEditIcon({ iconName = 'file-edit', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
