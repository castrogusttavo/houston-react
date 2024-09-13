import React from 'react'
import { Icon, IconProps } from '../Icon'

export function File01Icon({ iconName = 'file-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
