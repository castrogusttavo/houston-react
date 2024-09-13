import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Sad01Icon({ iconName = 'sad-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
