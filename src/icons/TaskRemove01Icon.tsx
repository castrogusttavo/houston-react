import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TaskRemove01Icon({
  iconName = 'task-remove-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
