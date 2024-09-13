import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MessageMultiple01Icon({
  iconName = 'message-multiple-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
