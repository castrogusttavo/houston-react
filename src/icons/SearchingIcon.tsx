import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SearchingIcon({ iconName = 'searching', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
