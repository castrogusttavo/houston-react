import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AnonymousIcon({ iconName = 'anonymous', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
