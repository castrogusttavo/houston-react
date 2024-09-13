import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TaskEdit02Icon({
  iconName = 'task-edit-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
