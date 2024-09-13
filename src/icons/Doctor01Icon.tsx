import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Doctor01Icon({ iconName = 'doctor-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
