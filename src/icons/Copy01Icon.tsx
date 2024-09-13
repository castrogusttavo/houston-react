import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Copy01Icon({ iconName = 'copy-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
