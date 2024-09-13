import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TetrisIcon({ iconName = 'tetris', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
