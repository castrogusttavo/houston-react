import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TaskDone01Icon({
  iconName = 'task-done-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
