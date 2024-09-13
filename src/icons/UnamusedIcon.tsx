import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UnamusedIcon({ iconName = 'unamused', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
