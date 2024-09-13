import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FirstBracketSquareIcon({
  iconName = '1st-bracket-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
