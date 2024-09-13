import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DominoIcon({ iconName = 'domino', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
