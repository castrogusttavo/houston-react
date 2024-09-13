import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ProgrammingFlagIcon({
  iconName = 'programming-flag',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
