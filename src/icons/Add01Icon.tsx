import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Add01Icon({ iconName = 'add-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
