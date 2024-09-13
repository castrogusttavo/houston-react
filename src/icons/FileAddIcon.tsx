import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FileAddIcon({ iconName = 'file-add', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
