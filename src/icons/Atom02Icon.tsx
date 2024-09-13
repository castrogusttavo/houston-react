import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Atom02Icon({ iconName = 'atom-02', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
