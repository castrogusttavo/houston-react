import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TelevisionTableIcon({
  iconName = 'television-table',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
