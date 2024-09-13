import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GridIcon({ iconName = 'grid', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
