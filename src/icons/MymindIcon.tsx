import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MymindIcon({ iconName = 'mymind', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
