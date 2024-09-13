import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DatabaseAddIcon({
  iconName = 'database-add',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
