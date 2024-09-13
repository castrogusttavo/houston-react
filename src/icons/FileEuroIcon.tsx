import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FileEuroIcon({ iconName = 'file-euro', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
