import React from 'react'
import { Icon, IconProps } from '../Icon'

export function OfficeIcon({ iconName = 'office', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
