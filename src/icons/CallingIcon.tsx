import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CallingIcon({ iconName = 'calling', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
