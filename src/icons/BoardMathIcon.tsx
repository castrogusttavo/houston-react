import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BoardMathIcon({
  iconName = 'board-math',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
