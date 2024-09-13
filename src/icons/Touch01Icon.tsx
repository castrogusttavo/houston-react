import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Touch01Icon({ iconName = 'touch-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
