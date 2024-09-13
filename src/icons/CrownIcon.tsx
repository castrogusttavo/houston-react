import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CrownIcon({ iconName = 'crown', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
