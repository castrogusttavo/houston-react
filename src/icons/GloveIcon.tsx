import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GloveIcon({ iconName = 'glove', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
