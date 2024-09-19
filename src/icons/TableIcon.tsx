import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TableIcon({ iconName = 'table', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
