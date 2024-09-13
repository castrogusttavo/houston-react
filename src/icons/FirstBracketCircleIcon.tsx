import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FirstBracketCircleIcon({
  iconName = '1st-bracket-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
