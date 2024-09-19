import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PlusMinusIconIcon({ iconName = 'plus-minus-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
