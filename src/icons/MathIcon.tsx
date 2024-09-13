import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MathIcon({ iconName = 'math', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
