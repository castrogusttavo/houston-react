import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Bug02Icon({ iconName = 'bug-02', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
