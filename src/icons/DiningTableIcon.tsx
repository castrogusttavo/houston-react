import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DiningTableIcon({
  iconName = 'dining-table',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
