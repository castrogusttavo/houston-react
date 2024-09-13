import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Money01Icon({ iconName = 'money-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
