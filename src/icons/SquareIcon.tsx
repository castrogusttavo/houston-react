import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SquareIcon({ iconName = 'square', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
