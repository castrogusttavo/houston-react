import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MessageSecure01Icon({
  iconName = 'message-secure-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
