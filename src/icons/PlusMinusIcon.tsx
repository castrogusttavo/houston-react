import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PlusMinusIcon({ iconName = 'plus-minus-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
