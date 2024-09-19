import React from 'react'
import { Icon, IconProps } from '../Icon'

export function InsertRowUpIcon({
  iconName = 'insert-row-up',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
