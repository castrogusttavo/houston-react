import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Tap01Icon({ iconName = 'tap-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
