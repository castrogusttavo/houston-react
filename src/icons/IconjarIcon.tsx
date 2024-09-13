import React from 'react'
import { Icon, IconProps } from '../Icon'

export function IconjarIcon({ iconName = 'iconjar', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
