import React from 'react'
import { Icon, IconProps } from '../Icon'

export function VomitingIcon({ iconName = 'vomiting', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
