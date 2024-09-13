import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HutIcon({ iconName = 'hut', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
