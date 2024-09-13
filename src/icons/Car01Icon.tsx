import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Car01Icon({ iconName = 'car-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
