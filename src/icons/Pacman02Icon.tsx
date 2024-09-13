import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Pacman02Icon({ iconName = 'pacman-02', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
