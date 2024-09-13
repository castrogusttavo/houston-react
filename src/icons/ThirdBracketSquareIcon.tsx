import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ThirdBracketSquareIcon({
  iconName = '3rd-bracket-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
