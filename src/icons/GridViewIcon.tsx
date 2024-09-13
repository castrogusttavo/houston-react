import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GridViewIcon({ iconName = 'grid-view', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
