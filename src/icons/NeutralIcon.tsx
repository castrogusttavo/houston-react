import React from 'react'
import { Icon, IconProps } from '../Icon'

export function NeutralIcon({ iconName = 'neutral', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
