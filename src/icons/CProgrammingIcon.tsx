import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CProgrammingIcon({
  iconName = 'c-programming',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
