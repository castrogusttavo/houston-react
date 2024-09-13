import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TaskDaily01Icon({
  iconName = 'task-daily-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
