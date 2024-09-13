import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Target01Icon({ iconName = 'target-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
