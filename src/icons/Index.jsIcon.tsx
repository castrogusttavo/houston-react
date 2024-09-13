import React from 'react'
import { Icon, IconProps } from '../Icon'

export function IndexjsIcon({ iconName = 'index.js', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
