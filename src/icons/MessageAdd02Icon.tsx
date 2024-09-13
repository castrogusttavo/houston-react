import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MessageAdd02Icon({
  iconName = 'message-add-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
