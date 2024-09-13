import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RouterIcon({ iconName = 'router', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
