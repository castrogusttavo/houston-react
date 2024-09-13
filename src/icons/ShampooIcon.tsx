import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ShampooIcon({ iconName = 'shampoo', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
