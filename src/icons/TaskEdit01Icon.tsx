import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TaskEdit01Icon({
  iconName = 'task-edit-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
