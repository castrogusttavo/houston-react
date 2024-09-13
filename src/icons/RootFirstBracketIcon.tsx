import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RootFirstBracketIcon({
  iconName = 'root-1st-bracket',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
