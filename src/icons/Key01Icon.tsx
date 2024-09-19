import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Key01Icon({ iconName = 'key-01-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
