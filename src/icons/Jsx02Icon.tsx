import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Jsx02Icon({ iconName = 'jsx-02', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
