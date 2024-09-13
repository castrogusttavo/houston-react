import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Atom01Icon({ iconName = 'atom-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
