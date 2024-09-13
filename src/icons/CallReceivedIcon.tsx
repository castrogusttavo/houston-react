import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CallReceivedIcon({
  iconName = 'call-received',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
