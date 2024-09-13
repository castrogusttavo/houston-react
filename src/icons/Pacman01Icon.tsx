import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Pacman01Icon({ iconName = 'pacman-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
