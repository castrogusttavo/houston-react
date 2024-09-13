import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FencingIcon({ iconName = 'fencing', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
