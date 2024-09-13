import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Hold01Icon({ iconName = 'hold-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
