import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MicrosoftIcon({ iconName = 'microsoft', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
