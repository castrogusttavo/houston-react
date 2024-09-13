import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SecondBracketIcon({
  iconName = '2nd-bracket',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
