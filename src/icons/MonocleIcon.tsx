import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MonocleIcon({ iconName = 'monocle', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
