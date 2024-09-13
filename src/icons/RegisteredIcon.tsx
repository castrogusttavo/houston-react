import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RegisteredIcon({
  iconName = 'registered',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
