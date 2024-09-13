import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MessageAdd01Icon({
  iconName = 'message-add-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
