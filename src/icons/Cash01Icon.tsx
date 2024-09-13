import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Cash01Icon({ iconName = 'cash-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
