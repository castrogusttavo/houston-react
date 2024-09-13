import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Album01Icon({ iconName = 'album-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
