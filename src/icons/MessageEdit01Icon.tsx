import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MessageEdit01Icon({
  iconName = 'message-edit-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
