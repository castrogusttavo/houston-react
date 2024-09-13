import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Suit01Icon({ iconName = 'suit-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
