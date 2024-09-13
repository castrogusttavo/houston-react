import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Route01Icon({ iconName = 'route-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
