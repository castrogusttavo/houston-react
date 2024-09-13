import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Png01Icon({ iconName = 'png-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
