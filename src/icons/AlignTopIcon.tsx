import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AlignTopIcon({ iconName = 'align-top', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
