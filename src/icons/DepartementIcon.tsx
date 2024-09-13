import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DepartementIcon({
  iconName = 'departement',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
