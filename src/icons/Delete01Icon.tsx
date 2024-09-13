import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Delete01Icon({ iconName = 'delete-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
