import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Atm01Icon({ iconName = 'atm-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
