import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Flag01Icon({ iconName = 'flag-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
