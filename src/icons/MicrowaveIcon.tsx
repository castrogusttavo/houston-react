import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MicrowaveIcon({ iconName = 'microwave', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
