import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PlayListIcon({ iconName = 'play-list', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
