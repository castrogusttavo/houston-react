import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ThirdBracketIcon({
  iconName = '3rd-bracket',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
