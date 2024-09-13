import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FileStarIcon({ iconName = 'file-star', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
