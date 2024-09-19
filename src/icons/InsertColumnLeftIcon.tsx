import React from 'react'
import { Icon, IconProps } from '../Icon'

export function InsertColumnLeftIcon({
  iconName = 'insert-column-left',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
