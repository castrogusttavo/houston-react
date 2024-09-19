import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ReturnRequestIcon({ iconName = 'return-request-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
