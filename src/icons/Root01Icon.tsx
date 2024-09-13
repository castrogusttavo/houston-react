import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Root01Icon({ iconName = 'root-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
