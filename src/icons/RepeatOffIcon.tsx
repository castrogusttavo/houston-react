import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RepeatOffIcon({
  iconName = 'repeat-off',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
