import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Route02Icon({ iconName = 'route-02', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
