import React from 'react'
import { Icon, IconProps } from '../Icon'

export function KnivesIcon({ iconName = 'knives', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
