import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Activity03Icon({
  iconName = 'activity-03',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
