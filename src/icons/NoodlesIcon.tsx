import React from 'react'
import { Icon, IconProps } from '../Icon'

export function NoodlesIcon({ iconName = 'noodles', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
