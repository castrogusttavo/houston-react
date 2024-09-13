import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BendToolIcon({ iconName = 'bend-tool', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
