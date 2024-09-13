import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MessageDelay01Icon({
  iconName = 'message-delay-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
