import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Task01Icon({ iconName = 'task-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
