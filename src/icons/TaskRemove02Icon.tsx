import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TaskRemove02Icon({
  iconName = 'task-remove-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
