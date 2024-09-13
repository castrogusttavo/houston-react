import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MoreIcon({ iconName = 'more', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
