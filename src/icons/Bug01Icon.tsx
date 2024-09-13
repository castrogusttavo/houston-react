import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Bug01Icon({ iconName = 'bug-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
