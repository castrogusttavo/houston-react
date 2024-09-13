import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Taco01Icon({ iconName = 'taco-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
