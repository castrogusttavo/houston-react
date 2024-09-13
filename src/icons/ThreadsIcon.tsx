import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ThreadsIcon({ iconName = 'threads', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
