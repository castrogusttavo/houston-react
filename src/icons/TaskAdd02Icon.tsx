import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TaskAdd02Icon({
  iconName = 'task-add-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
