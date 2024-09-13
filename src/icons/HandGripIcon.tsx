import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HandGripIcon({ iconName = 'hand-grip', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
