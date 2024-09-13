import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AmieIcon({ iconName = 'amie', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
