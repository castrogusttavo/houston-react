import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DroolingIcon({ iconName = 'drooling', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
