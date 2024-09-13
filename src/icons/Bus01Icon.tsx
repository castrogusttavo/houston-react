import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Bus01Icon({ iconName = 'bus-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
