import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Alien01Icon({ iconName = 'alien-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
