import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ReminderIcon({ iconName = 'reminder', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
