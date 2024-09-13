import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Shaka01Icon({ iconName = 'shaka-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
