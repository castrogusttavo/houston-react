import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BoxerIcon({ iconName = 'boxer', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
