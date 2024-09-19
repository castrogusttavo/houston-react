import React from 'react'
import { Icon, IconProps } from '../Icon'

export function InsertColumnIcon({
  iconName = 'insert-column',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
