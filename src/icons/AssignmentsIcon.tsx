import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AssignmentsIcon({
  iconName = 'assignments',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
