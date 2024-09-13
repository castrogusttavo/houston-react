import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RadioIcon({ iconName = 'radio', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
