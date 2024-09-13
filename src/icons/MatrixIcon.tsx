import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MatrixIcon({ iconName = 'matrix', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
