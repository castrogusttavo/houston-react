import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ThreadIconIcon({ iconName = 'thread-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
